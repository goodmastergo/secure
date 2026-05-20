"use client";

import { useState, useEffect } from 'react';

export default function KMAppPage() {
  const [toast, setToast] = useState({ show: false, message: "" });

  useEffect(() => {
    const container = document.getElementById('star-container');
    if (!container) return;

    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.innerHTML = '★';
      const startPos = Math.random() * window.innerWidth;
      star.style.left = startPos + 'px';
      const size = Math.random() * 10 + 10;
      star.style.fontSize = size + 'px';
      const duration = Math.random() * 3 + 3;
      star.style.animationDuration = `${duration}s`;
      star.style.opacity = Math.random();
      container.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    };

    const intervalId = setInterval(createStar, 400);
    return () => clearInterval(intervalId);
  }, []);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 2500);
  };

  const fallbackCopy = (text) => {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    tempInput.style.position = "fixed";
    tempInput.style.left = "-9999px";
    tempInput.style.top = "-9999px";
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        console.log("Referral copied via fallback: " + text);
        showToast("Referral Code Copied: " + text);
      } else {
        console.error("Fallback copy command was unsuccessful");
      }
    } catch (err) {
      console.error("Fallback copy failed: ", err);
    }
    document.body.removeChild(tempInput);
  };

  const copyReferralAndDownload = (copyStr) => {
    if (copyStr) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(copyStr).then(() => {
          console.log("Referral copied: " + copyStr);
          showToast("Referral Code Copied: " + copyStr);
        }).catch((err) => {
          console.error("Navigator clipboard failed, trying fallback: ", err);
          fallbackCopy(copyStr);
        });
      } else {
        fallbackCopy(copyStr);
      }
    }
  };

  const DownSoft = () => {
    let copyStr = 'KMU8697028';
    copyReferralAndDownload(copyStr);
    
    setTimeout(() => {
      window.location.href = "https://github.com/marketingrunning8-cpu/kmapp/releases/download/app/app-release.apk";
    }, 300);
  };

  return (
    <>
      <div className="header-decoration"></div>
      <div id="star-container"></div>

      <div className="container">
        
        {/* Profile Section */}
        <div className="profile-header">
          <div className="avatar-box">
            <div className="avatar"></div>
          </div>
          <div className="welcome-title">
            <p style={{ color: "#c8a355", fontSize: "11px", fontWeight: "bold", letterSpacing: "2px", marginTop: "35px" }}>
              PREMIUM VERSION 2026
            </p>
          </div>
        </div>

        {/* Download Card */}
        <a href="#" onClick={(e) => { e.preventDefault(); DownSoft(); }} className="premium-card">
          <div className="card-inner">
            <div className="dl-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#001a1f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
            <div className="info" style={{ textAlign: "center" }}>
              <p>DOWNLOAD APP NOW</p>
            </div>
            <div className="dl-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#001a1f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
          </div>
        </a>

      </div>

      {/* Toast Notification */}
      <div className={`toast ${toast.show ? 'show' : ''}`} id="toast-notification">
        <span>✨</span> {toast.message}
      </div>
    </>
  );
}
