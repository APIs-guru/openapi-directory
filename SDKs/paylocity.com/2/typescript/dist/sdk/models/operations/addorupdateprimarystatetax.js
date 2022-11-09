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
var AddOrUpdatePrimaryStateTaxPathParams = /** @class */ (function (_super) {
    __extends(AddOrUpdatePrimaryStateTaxPathParams, _super);
    function AddOrUpdatePrimaryStateTaxPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], AddOrUpdatePrimaryStateTaxPathParams.prototype, "companyId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], AddOrUpdatePrimaryStateTaxPathParams.prototype, "employeeId", void 0);
    return AddOrUpdatePrimaryStateTaxPathParams;
}(SpeakeasyBase));
export { AddOrUpdatePrimaryStateTaxPathParams };
var AddOrUpdatePrimaryStateTaxSecurity = /** @class */ (function (_super) {
    __extends(AddOrUpdatePrimaryStateTaxSecurity, _super);
    function AddOrUpdatePrimaryStateTaxSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], AddOrUpdatePrimaryStateTaxSecurity.prototype, "paylocityAuth", void 0);
    return AddOrUpdatePrimaryStateTaxSecurity;
}(SpeakeasyBase));
export { AddOrUpdatePrimaryStateTaxSecurity };
var AddOrUpdatePrimaryStateTaxRequest = /** @class */ (function (_super) {
    __extends(AddOrUpdatePrimaryStateTaxRequest, _super);
    function AddOrUpdatePrimaryStateTaxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AddOrUpdatePrimaryStateTaxPathParams)
    ], AddOrUpdatePrimaryStateTaxRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StateTax)
    ], AddOrUpdatePrimaryStateTaxRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AddOrUpdatePrimaryStateTaxSecurity)
    ], AddOrUpdatePrimaryStateTaxRequest.prototype, "security", void 0);
    return AddOrUpdatePrimaryStateTaxRequest;
}(SpeakeasyBase));
export { AddOrUpdatePrimaryStateTaxRequest };
var AddOrUpdatePrimaryStateTaxResponse = /** @class */ (function (_super) {
    __extends(AddOrUpdatePrimaryStateTaxResponse, _super);
    function AddOrUpdatePrimaryStateTaxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AddOrUpdatePrimaryStateTaxResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AddOrUpdatePrimaryStateTaxResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], AddOrUpdatePrimaryStateTaxResponse.prototype, "errors", void 0);
    return AddOrUpdatePrimaryStateTaxResponse;
}(SpeakeasyBase));
export { AddOrUpdatePrimaryStateTaxResponse };
