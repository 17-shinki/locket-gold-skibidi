// ========= Locket Gold Unlock Script ========= //
// ========= Code by Ohoang7 - Cleaned by ChatGPT ========= //

const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
const obj = JSON.parse($response.body);

// Thông báo cá nhân
obj.Attention = "Chúc mừng bạn đã mở khóa Locket Gold!";

// Thông tin subscription giả
const subscriptionInfo = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-31T23:59:59Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2024-07-28T01:04:18Z",
  purchase_date: "2024-07-28T01:04:17Z",
  store: "app_store"
};

const entitlementInfo = {
  grace_period_expires_date: null,
  purchase_date: "2024-07-28T01:04:17Z",
  product_identifier: "locket.premium.yearly",
  expires_date: "2099-12-31T23:59:59Z"
};

// Kiểm tra user-agent có chứa "Locket"
if (ua.includes("Locket")) {
  obj.subscriber.subscriptions["locket.premium.yearly"] = subscriptionInfo;
  obj.subscriber.entitlements["premium"] = entitlementInfo;
}

// Done
$done({ body: JSON.stringify(obj) });
