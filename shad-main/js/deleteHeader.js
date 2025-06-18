function setHeaderValue(e,a,d){
  var r=a.toLowerCase();
  r in e?e[r]=d:e[a]=d;
}
var modifiedHeaders=$request.headers;
setHeaderValue(modifiedHeaders,"X-RevenueCat-ETag","");
$done({headers:modifiedHeaders});
//         jsonToUpdate.subscriber.entitlements[entitlement].product_identifier = productIdentifier;
//         jsonToUpdate.subscriber.entitlements[entitlement].expires_date = "2099-12-18T01:04:17Z";
//         jsonToUpdate.subscriber.entitlements[entitlement].is_sandbox = false;
//         jsonToUpdate.subscriber.entitlements[entitlement].ownership_type = "PURCHASED";
//         jsonToUpdate.subscriber.entitlements[entitlement].store = "app_store";
//     }
//   }
//
//   jsonToUpdate.subscriber.entitlements.pro = {
//     "purchase_date": "2024-07-26T01:01:01Z",
//     "original_purchase_date": "2024-07-26T01:01:01Z",
//     "expires_date": "9692-01-01T01:01:01Z",
//     "is_sandbox": false,
//     "ownership_type": "PURCHASED",
//     "store": "app_store",
//     "product_identifier": "com.ohoang7.premium.yearly"
//   };
//   jsonToUpdate.subscriber.subscriptions["com.ohoang7.premium.yearly"] = {
//     "expires_date": "9692-01-01T01:01:01Z",
//     "original_purchase_date": "2024-07-26T01:01:01Z",
//     "purchase_date": "2024-07-26T01:01:01Z",
//     "is_sandbox": false,
//     "ownership_type": "PURCHASED",
//     "store": "app_store"
//   };
//
//   $done({body: JSON.stringify(jsonToUpdate)});
// Compare this snippet from shad-main/js/Locket_Ohoang7.js:
//   if (!ent) {