import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ─── Demo session payload ─────────────────────────────────────────────────────
const DEMO_USER = {
    id: "1",   // used as userId in update_status.php POST
    emp_id: "DEMO001",      // must not be "admin" — keeps admin-only UI hidden
    name: "Dr. Sarah Chen (Demo)",
    email: "demo@profsense.dev",
    department: "Computer Science",
    designation: "Associate Professor",
    isDemo: true,           // Flag identifying this as a public demo session
};

const PublicDemo = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // 1. Inject demo user object for authentication guards (PrivateRoute)
        localStorage.setItem("user", JSON.stringify(DEMO_USER));

        // 2. Set explicit isDemo flag so Dashboard switches to get_demo_faculty.php
        localStorage.setItem("isDemo", "true");

        // Redirect straight into the live dashboard
        navigate("/dashboard", { replace: true });
    }, [navigate]);

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