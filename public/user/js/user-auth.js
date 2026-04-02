(async function () {
  try {
    const res = await fetch("/api/user/profile", {
      credentials: "include"
    });

    if (!res.ok) {
      console.warn("User not authenticated");
      return; // ❌ REMOVE REDIRECT
    }

    console.log("User authenticated");

  } catch (err) {
    console.error(err);
    // ❌ REMOVE REDIRECT
  }
})();