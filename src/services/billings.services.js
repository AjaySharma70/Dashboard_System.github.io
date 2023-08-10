import { db } from "../firebase";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const billingCollectionRef = collection(db, "billings");
class BillingDataService {
    addBillings = (newBilling) => {
        return addDoc(billingCollectionRef, newBilling);
    };

    updateBilling = (id, updatedBilling) => {
        const billingDoc = doc(db, "billings", id);
        return updateDoc(billingDoc, updatedBilling);
    };

    deleteBilling = (id) => {
        const billingDoc = doc(db, "billings", id);
        return deleteDoc(billingDoc);
    };

    getAllBillings = () => {
        return getDocs(billingCollectionRef);
    };

    getBilling = (id) => {
        const billingDoc = doc(db, "billings", id);
        return getDoc(billingDoc);
    };
}

export default new BillingDataService();
