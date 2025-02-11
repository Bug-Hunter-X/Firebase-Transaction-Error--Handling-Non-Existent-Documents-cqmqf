# Firebase Transaction Error: Handling Non-Existent Documents

This repository demonstrates a common error when using Firebase transactions and provides a solution.

The problem lies in using `FieldValue.increment` without checking if the document exists before attempting the update.  If the document does not exist, `data()` returns `undefined`, causing a TypeError.

The solution adds a check for document existence using a `get()` operation before attempting the update, ensuring that the increment operation only proceeds if the document exists.

## How to Reproduce

1. Clone this repository.
2.  Ensure you have the Firebase Javascript SDK installed and your Firebase project configured.
3. Run the `bug.js` file. You will observe an error. 
4. Run the `bugSolution.js` file. This version will work as expected.