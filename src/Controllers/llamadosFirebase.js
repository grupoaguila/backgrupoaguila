const { collection, getFirestore, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where} =require( "firebase/firestore");
 const{ db } =require( "./comotuquieras");


// CREATE
const createPer = async(obj) => {
    const colRef = collection(db, 'Peritos');
    const data = await addDoc(colRef, obj);
    return data.id;
}
const createCase = async(obj) => {
    const colRef = collection(db, 'Casos');
    const data = await addDoc(colRef, obj);
    return data.id;
}
// UPDATE
const updateCases = async (id, obj) => {
    const colRef = collection(db, 'Casos');
    await updateDoc(doc(colRef, id), obj)
}
const updatePeritos = async (id, obj) => {
    const colRef = collection(db, 'Peritos');
    await updateDoc(doc(colRef, id), obj)
   
}


// READ
const getPer= async ()  => {
    const colRef =  collection(db, 'Peritos');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result)
}

const getCases= async ()  => {
    const colRef = collection(db, 'Casos');
    
    const result = await getDocs(query(colRef));
    
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
const getCasesByCondition = async (value) => {
    // const colRef = collection(db, 'Casos');
    // const result = await getDocs(query(colRef, where('Patente', '==', value)));
    // return getArrayFromCollection(result);
    const docusFiltrado = [];

  const collecionRef = collection(db, "Casos");
  const queryTitulo = query(
    collecionRef,
    where("Numero", "==", value)
  );
  const querySku = query(collecionRef, where("sku", "==", value));

  const arraySnapshots = await Promise.all([
    getDocs(queryTitulo),
    getDocs(querySku),
  ]);

  arraySnapshots.forEach((snapshot) => {
    snapshot.forEach((doc) => {
      docusFiltrado.push(doc.data());
    });
  });
  /* console.log('docusFiltrado', docusFiltrado) */
  return docusFiltrado;
}


const getCasesByOptions = async (value) => {
    // const colRef = collection(db, 'Casos');
    // const result = await getDocs(query(colRef, where('Patente', '==', value)));
    // return getArrayFromCollection(result);
    const docusFiltrado = [];

  const collecionRef = collection(db, "Casos");
  const queryTitulo = query(
    collecionRef,
    where('Numero', "==", value) 
  );
  const queryCompañia = query(collecionRef, where("Compañia", "==", value));
  const queryLocalidad = query(collecionRef, where("localidad", "==", value));
  const queryPatente = query(collecionRef, where("Patente", "==", value));
  const queryPerito = query(collecionRef, where("perito", "==", value));
  const queryNombre = query(collecionRef, where("Nombre", "==", value));
  

  const arraySnapshots = await Promise.all([
    getDocs(queryTitulo),
    getDocs(queryCompañia),
    getDocs(queryLocalidad),
    getDocs(queryPatente),
    getDocs(queryPerito),
    getDocs(queryNombre),
  ]);

  arraySnapshots.forEach((snapshot) => {
    snapshot.forEach((doc) => {
      docusFiltrado.push(doc.data());
    });
  });
  /* console.log('docusFiltrado', docusFiltrado) */
  return docusFiltrado;
}

const getItemById = async (id) => {
    const colRef = collection(db, 'items');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE
const deletePerito = async (id) => {
    const colRef = collection(db, 'Peritos');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}

//EDIT
const editCasos = (id) => {
 const casoEditar = getFirestore(db)
 const collectionRef = collection(casoEditar, "Casos");
  const docRef = doc(collectionRef, id);
  setDoc(docRef );
}

module.exports={
  getPer,
  getCases
}