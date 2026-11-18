import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ─── Demo session payload ─────────────────────────────────────────────────────
// Shaped to match exactly what the app reads from storage:
//   - PrivateRoute  → needs any truthy object
//   - Navbar        → reads user.name, user.emp_id  (must not be undefined)
//   - UpdateStatus  → reads user.id, user.emp_id
//   - Profile       → reads user.id
//   - No JWT / token is checked anywhere in the frontend
const DEMO_USER = {
    id: "1",   // used as userId in update_status.php POST
    emp_id: "DEMO001",      // must not be "admin" — keeps admin-only UI hidden
    name: "Dr. Sarah Chen (Demo)",
    email: "demo@profsense.dev",
    department: "Computer Science",
    designation: "Associate Professor",
};

const PublicDemo = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Inject demo session into localStorage so PrivateRoute passes
        localStorage.setItem("user", JSON.stringify(DEMO_USER));

        // Redirect straight into the live dashboard
        navigate("/dashboard", { replace: true });
    }, [navigate]);

    // Shown for the brief moment before the redirect fires
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontFamily: "sans-serif",
                background: "linear-gradient(to right, #06293D, #061029)",
                color: "#fff",
                gap: "16px",
            }}
        >
            {/* Spinner */}
            <div
                style={{
                    width: "40px",
                    height: "40px",
                    border: "4px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#FD752C",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                }}
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <p style={{ fontSize: "1.1rem", fontWeight: 500, margin: 0 }}>
                Entering ProfSense Interactive Demo...
            </p>
        </div>
    );
};

export default PublicDemo;
