import { db } from "@/firebase/config";
import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

/**
 * This function retrieves user data from a specified collection in a Firestore database
 * using the user's ID.
 * @param {string} collectionName - The name of the collection in the Firestore database where the user
 * data is stored.
 * @param {string} userId - The `userId` parameter is a string that represents the unique identifier of
 * a user in a specific collection in a Firestore database. It is used to retrieve the data of a
 * specific user from the database.
 * @returns The `getUserData` function is returning the data of a user document from a Firestore
 * collection specified by the `collectionName` parameter and the `userId` parameter. The data is
 * retrieved using the `getDoc` function from the Firestore SDK and returned as an object.
 */
export const getUserData = async (collectionName: string, userId: string) => {
  const userDoc = await getDoc(doc(db, collectionName, userId));
  return userDoc;
};

/**
 * This function adds user data to a specified collection in a Firestore database.
 * @param {string} collectionName - The name of the collection in Firestore where the data will be
 * added.
 * @param {string} userId - The userId parameter is a string that represents the unique identifier of a
 * user in a database collection. It is used to specify the document to which the data will be added.
 * @param {any} data - The `data` parameter is of type `any`, which means it can be any data type. It
 * represents the data that needs to be added to the Firestore document for the given `userId` in the
 * specified `collectionName`.
 */
export const addUserData = async (collectionName: string, userId: string, data: any) => {
  await setDoc(doc(db, collectionName, userId), data, {
    merge: true,
  });
};

/**
 * This function updates user data in a specified collection using the provided user ID and data.
 * @param {string} collectionName - a string representing the name of the collection in Firestore where
 * the user data will be updated.
 * @param {string} userId - The userId parameter is a string that represents the unique identifier of a
 * user in a database collection. It is used to locate the specific document in the collection that
 * needs to be updated with the provided data.
 * @param {any} data - "data" is a parameter that represents the updated data that needs to be saved in
 * the Firestore database. It can be of any type, as long as it can be serialized into a JSON format.
 * The data will be merged with the existing data in the document, meaning that any fields that are not
 * included
 */
export const updateUserData = async (
  collectionName: string,
  userId: string,
  data: any
) => {
  await updateDoc(doc(db, collectionName, userId), data, {
    merge: true,
  });
};

/**
 * This TypeScript function counts the number of referrals in a given collection that match a specific
 * referral ID.
 * @param {string} collectionName - The name of the collection in Firestore where the data is stored.
 * @param {string} evgId - The `evgId` parameter is a string representing the referral ID that we want
 * to count in the specified collection. The function uses this parameter to create a query that
 * filters the collection based on the `referralId` field matching the `evgId` value. The function then
 * returns the
 * @returns The `countReferrals` function is returning a Promise that resolves to a snapshot of the
 * number of documents in a Firestore collection that have a `referralId` field equal to the `evgId`
 * parameter passed to the function.
 */
export const countReferrals = async (collectionName: string, evgId: string) => {
  const q = query(collection(db, collectionName), where("referralId", "==", evgId));
  const snapshot = await getCountFromServer(q);
  return snapshot;
};
