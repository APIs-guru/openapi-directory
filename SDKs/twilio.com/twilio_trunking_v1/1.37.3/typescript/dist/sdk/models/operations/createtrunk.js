var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var CreateTrunkServerList = [
    "https://trunking.twilio.com",
];
export var CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum;
(function (CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum) {
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Head"] = "HEAD";
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Get"] = "GET";
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Post"] = "POST";
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Patch"] = "PATCH";
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Put"] = "PUT";
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Delete"] = "DELETE";
})(CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum || (CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum = {}));
var CreateTrunkCreateTrunkRequest = /** @class */ (function (_super) {
    __extends(CreateTrunkCreateTrunkRequest, _super);
    function CreateTrunkCreateTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CnamLookupEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateTrunkCreateTrunkRequest.prototype, "cnamLookupEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DisasterRecoveryMethod;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "disasterRecoveryMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DisasterRecoveryUrl;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "disasterRecoveryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DomainName;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Secure;" }),
        __metadata("design:type", Boolean)
    ], CreateTrunkCreateTrunkRequest.prototype, "secure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TransferCallerId;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "transferCallerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TransferMode;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "transferMode", void 0);
    return CreateTrunkCreateTrunkRequest;
}(SpeakeasyBase));
export { CreateTrunkCreateTrunkRequest };
var CreateTrunkSecurity = /** @class */ (function (_super) {
    __extends(CreateTrunkSecurity, _super);
    function CreateTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTrunkSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTrunkSecurity;
}(SpeakeasyBase));
export { CreateTrunkSecurity };
var CreateTrunkRequest = /** @class */ (function (_super) {
    __extends(CreateTrunkRequest, _super);
    function CreateTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTrunkRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTrunkCreateTrunkRequest)
    ], CreateTrunkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTrunkSecurity)
    ], CreateTrunkRequest.prototype, "security", void 0);
    return CreateTrunkRequest;
}(SpeakeasyBase));
export { CreateTrunkRequest };
var CreateTrunkResponse = /** @class */ (function (_super) {
    __extends(CreateTrunkResponse, _super);
    function CreateTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTrunkResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrunkingV1Trunk)
    ], CreateTrunkResponse.prototype, "trunkingV1Trunk", void 0);
    return CreateTrunkResponse;
}(SpeakeasyBase));
export { CreateTrunkResponse };
