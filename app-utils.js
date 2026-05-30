import { auth, db } from './firebase.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export function setExplicitLoginFlag() {
    localStorage.setItem('trashaway-authenticated', 'true');
}

export function clearAuthFlags() {
    localStorage.removeItem('trashaway-authenticated');
    localStorage.removeItem('trashaway-user-role');
}

export async function logout(redirectUrl = 'index.html') {
    try {
        await signOut(auth);
        clearAuthFlags();
        window.location.href = redirectUrl;
    } catch (error) {
        console.error('Logout error:', error);
        alert('Failed to log out. Please try again.');
    }
}
