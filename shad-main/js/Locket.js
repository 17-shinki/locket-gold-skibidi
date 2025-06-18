/***********************************************
> Locket Gold Unlock Script
> Code by Ohoang7 - Final version by ChatGPT
***********************************************/

if (!$request) {
  $done({});
  return;
}

const options = {
  url: "https://api.revenuecat.com/v1/product_entitlement_mapping",
  headers: {
    'Authorization': $request.headers["authorization"] || "",
    'X-Platform': 'iOS',
    'User-Agent': $request.headers["user-agent"] || ""
  }
};

$httpClient.get(options, function (error, _res, data) {
  if (error || !data) {
    $done({});
    return;
  }

  let ent;
  try {
    ent = JSON.parse(data);
  } catch {
    $done({});
    return;
  }

  if (!ent.product_entitlement_mapping) {
    $done({});
    return;
  }

  const jsonToUpdate = {
    "request_date_ms": Date.now(),
    "request_date": new Date().toISOString(),
    "subscriber": {
      "entitlements": {},
      "first_seen": new Date().toISOString(),
      "original_application_version": "9692",
      "last_seen": new Date().toISOString(),
      "other_purchases": {},
      "management_url": null,
      "subscriptions": {},
      "original_purchase_date": new Date().toISOString(),
      "original_app_user_id": "Locket_Gold_By_ChatGPT",
      "non_subscriptions": {}
    }
  };

  const productEntitlementMapping = ent.product_entitlement_mapping;

  for (const [entitlementId, productInfo] of Object.entries(productEntitlementMapping)) {
    const productIdentifier = productInfo.product_identifier;
    const entitlements = productInfo.entitlements || [];

    for (const entitlement of entitlements) {
      const fakeSub = {
        "purchase_date": "2024-07-26T01:01:01Z",
        "original_purchase_date": "2024-07-26T01:01:01Z",
        "expires_date": "9692-01-01T01:01:01Z",
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "product_identifier": productIdentifier
      };

      jsonToUpdate.subscriber.entitlements[entitlement] = fakeSub;
      jsonToUpdate.subscriber.subscriptions[productIdentifier] = fakeSub;
    }
  }

  $done({ body: JSON.stringify(jsonToUpdate) });
});