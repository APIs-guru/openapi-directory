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
var AddOrUpdateEmergencyContactsPathParams = /** @class */ (function (_super) {
    __extends(AddOrUpdateEmergencyContactsPathParams, _super);
    function AddOrUpdateEmergencyContactsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], AddOrUpdateEmergencyContactsPathParams.prototype, "companyId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], AddOrUpdateEmergencyContactsPathParams.prototype, "employeeId", void 0);
    return AddOrUpdateEmergencyContactsPathParams;
}(SpeakeasyBase));
export { AddOrUpdateEmergencyContactsPathParams };
var AddOrUpdateEmergencyContactsSecurity = /** @class */ (function (_super) {
    __extends(AddOrUpdateEmergencyContactsSecurity, _super);
    function AddOrUpdateEmergencyContactsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], AddOrUpdateEmergencyContactsSecurity.prototype, "paylocityAuth", void 0);
    return AddOrUpdateEmergencyContactsSecurity;
}(SpeakeasyBase));
export { AddOrUpdateEmergencyContactsSecurity };
var AddOrUpdateEmergencyContactsRequest = /** @class */ (function (_super) {
    __extends(AddOrUpdateEmergencyContactsRequest, _super);
    function AddOrUpdateEmergencyContactsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AddOrUpdateEmergencyContactsPathParams)
    ], AddOrUpdateEmergencyContactsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EmergencyContact)
    ], AddOrUpdateEmergencyContactsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AddOrUpdateEmergencyContactsSecurity)
    ], AddOrUpdateEmergencyContactsRequest.prototype, "security", void 0);
    return AddOrUpdateEmergencyContactsRequest;
}(SpeakeasyBase));
export { AddOrUpdateEmergencyContactsRequest };
var AddOrUpdateEmergencyContactsResponse = /** @class */ (function (_super) {
    __extends(AddOrUpdateEmergencyContactsResponse, _super);
    function AddOrUpdateEmergencyContactsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AddOrUpdateEmergencyContactsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AddOrUpdateEmergencyContactsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], AddOrUpdateEmergencyContactsResponse.prototype, "errors", void 0);
    return AddOrUpdateEmergencyContactsResponse;
}(SpeakeasyBase));
export { AddOrUpdateEmergencyContactsResponse };
