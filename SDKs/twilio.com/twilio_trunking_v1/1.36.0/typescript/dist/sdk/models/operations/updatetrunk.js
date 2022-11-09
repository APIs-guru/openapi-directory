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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var UPDATETRUNK_SERVERS = [
    "https://trunking.twilio.com",
];
var UpdateTrunkPathParams = /** @class */ (function (_super) {
    __extends(UpdateTrunkPathParams, _super);
    function UpdateTrunkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateTrunkPathParams.prototype, "sid", void 0);
    return UpdateTrunkPathParams;
}(SpeakeasyBase));
export { UpdateTrunkPathParams };
export var UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum;
(function (UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum) {
    UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum["Head"] = "HEAD";
    UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum["Get"] = "GET";
    UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum["Post"] = "POST";
    UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum["Patch"] = "PATCH";
    UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum["Put"] = "PUT";
    UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum["Delete"] = "DELETE";
})(UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum || (UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum = {}));
var UpdateTrunkUpdateTrunkRequest = /** @class */ (function (_super) {
    __extends(UpdateTrunkUpdateTrunkRequest, _super);
    function UpdateTrunkUpdateTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CnamLookupEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateTrunkUpdateTrunkRequest.prototype, "cnamLookupEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=DisasterRecoveryMethod;" }),
        __metadata("design:type", String)
    ], UpdateTrunkUpdateTrunkRequest.prototype, "disasterRecoveryMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=DisasterRecoveryUrl;" }),
        __metadata("design:type", String)
    ], UpdateTrunkUpdateTrunkRequest.prototype, "disasterRecoveryUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=DomainName;" }),
        __metadata("design:type", String)
    ], UpdateTrunkUpdateTrunkRequest.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateTrunkUpdateTrunkRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Secure;" }),
        __metadata("design:type", Boolean)
    ], UpdateTrunkUpdateTrunkRequest.prototype, "secure", void 0);
    __decorate([
        Metadata({ data: "form, name=TransferCallerId;" }),
        __metadata("design:type", String)
    ], UpdateTrunkUpdateTrunkRequest.prototype, "transferCallerId", void 0);
    __decorate([
        Metadata({ data: "form, name=TransferMode;" }),
        __metadata("design:type", String)
    ], UpdateTrunkUpdateTrunkRequest.prototype, "transferMode", void 0);
    return UpdateTrunkUpdateTrunkRequest;
}(SpeakeasyBase));
export { UpdateTrunkUpdateTrunkRequest };
var UpdateTrunkSecurity = /** @class */ (function (_super) {
    __extends(UpdateTrunkSecurity, _super);
    function UpdateTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateTrunkSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateTrunkSecurity;
}(SpeakeasyBase));
export { UpdateTrunkSecurity };
var UpdateTrunkRequest = /** @class */ (function (_super) {
    __extends(UpdateTrunkRequest, _super);
    function UpdateTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateTrunkRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateTrunkPathParams)
    ], UpdateTrunkRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateTrunkUpdateTrunkRequest)
    ], UpdateTrunkRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateTrunkSecurity)
    ], UpdateTrunkRequest.prototype, "security", void 0);
    return UpdateTrunkRequest;
}(SpeakeasyBase));
export { UpdateTrunkRequest };
var UpdateTrunkResponse = /** @class */ (function (_super) {
    __extends(UpdateTrunkResponse, _super);
    function UpdateTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateTrunkResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrunkingV1Trunk)
    ], UpdateTrunkResponse.prototype, "trunkingV1Trunk", void 0);
    return UpdateTrunkResponse;
}(SpeakeasyBase));
export { UpdateTrunkResponse };
