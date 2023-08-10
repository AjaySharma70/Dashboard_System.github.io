import { db } from "../firebase";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const profileCollectionRef = collection(db, "profiles");
class ProfileDataService {
    addProfiles = (newProfile) => {
        return addDoc(profileCollectionRef, newProfile);
    };

    updateProfile = (id, updatedProfile) => {
        const profileDoc = doc(db, "profiles", id);
        return updateDoc(profileDoc, updatedProfile);
    };

    deleteProfile = (id) => {
        const profileDoc = doc(db, "profiles", id);
        return deleteDoc(profileDoc);
    };

    getAllProfiles = () => {
        return getDocs(profileCollectionRef);
    };

    getProfile = (id) => {
        const profileDoc = doc(db, "profiles", id);
        return getDoc(profileDoc);
    };
}

export default new ProfileDataService();

