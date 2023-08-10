import { db } from "../firebase";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const roleCollectionRef = collection(db, "roles");
class RoleDataService {
    addRoles = (newRole) => {
        return addDoc(roleCollectionRef, newRole);
    };

    updateRole = (id, updatedRole) => {
        const roleDoc = doc(db, "roles", id);
        return updateDoc(roleDoc, updatedRole);
    };

    deleteRole = (id) => {
        const roleDoc = doc(db, "roles", id);
        return deleteDoc(roleDoc);
    };

    getAllRoles = () => {
        return getDocs(roleCollectionRef);
    };

    getRole = (id) => {
        const roleDoc = doc(db, "roles", id);
        return getDoc(roleDoc);
    };
}

export default new RoleDataService();