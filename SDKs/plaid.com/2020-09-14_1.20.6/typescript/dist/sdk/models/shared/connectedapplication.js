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
import { RequestedScopes } from "./requestedscopes";
export var ConnectedApplicationProductDataTypesEnum;
(function (ConnectedApplicationProductDataTypesEnum) {
    ConnectedApplicationProductDataTypesEnum["AccountBalance"] = "ACCOUNT_BALANCE";
    ConnectedApplicationProductDataTypesEnum["AccountUserInfo"] = "ACCOUNT_USER_INFO";
    ConnectedApplicationProductDataTypesEnum["AccountTransactions"] = "ACCOUNT_TRANSACTIONS";
})(ConnectedApplicationProductDataTypesEnum || (ConnectedApplicationProductDataTypesEnum = {}));
// ConnectedApplication
/**
 * Describes the connected application for a particular end user.
**/
var ConnectedApplication = /** @class */ (function (_super) {
    __extends(ConnectedApplication, _super);
    function ConnectedApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application_id" }),
        __metadata("design:type", String)
    ], ConnectedApplication.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application_url" }),
        __metadata("design:type", String)
    ], ConnectedApplication.prototype, "applicationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], ConnectedApplication.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], ConnectedApplication.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo_url" }),
        __metadata("design:type", String)
    ], ConnectedApplication.prototype, "logoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectedApplication.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product_data_types" }),
        __metadata("design:type", Array)
    ], ConnectedApplication.prototype, "productDataTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason_for_access" }),
        __metadata("design:type", String)
    ], ConnectedApplication.prototype, "reasonForAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requested_scopes" }),
        __metadata("design:type", RequestedScopes)
    ], ConnectedApplication.prototype, "requestedScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Map)
    ], ConnectedApplication.prototype, "scopes", void 0);
    return ConnectedApplication;
}(SpeakeasyBase));
export { ConnectedApplication };
