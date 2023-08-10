import { db } from "../firebase";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const memberCollectionRef = collection(db, "members");
class MemberDataService {
    addMembers = (newMember) => {
        return addDoc(memberCollectionRef, newMember);
    };

    updateMember = (id, updatedMember) => {
        const memberDoc = doc(db, "members", id);
        return updateDoc(memberDoc, updatedMember);
    };

    deleteMember = (id) => {
        const memberDoc = doc(db, "members", id);
        return deleteDoc(memberDoc);
    };

    getAllMembers = () => {
        return getDocs(memberCollectionRef);
    };

    getMember = (id) => {
        const memberDoc = doc(db, "members", id);
        return getDoc(memberDoc);
    };
}

export default new MemberDataService();

