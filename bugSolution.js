The solution involves checking for the document's existence before attempting the transaction.  If the document doesn't exist, it will be created with an initial value before incrementing the counter.

```javascript
async function updateCount(){
  const docRef = firebase.firestore().doc('path/to/doc');
  const doc = await docRef.get();
  if (doc.exists) {
    await docRef.update({
      count: firebase.firestore.FieldValue.increment(1)
    });
  } else {
    await docRef.set({ count: 1 });
  }
}
updateCount().catch(error => {
  console.error('Error updating or creating document:', error);
});
```