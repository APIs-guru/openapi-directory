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
var AddOrUpdateNonPrimaryStateTaxPathParams = /** @class */ (function (_super) {
    __extends(AddOrUpdateNonPrimaryStateTaxPathParams, _super);
    function AddOrUpdateNonPrimaryStateTaxPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], AddOrUpdateNonPrimaryStateTaxPathParams.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], AddOrUpdateNonPrimaryStateTaxPathParams.prototype, "employeeId", void 0);
    return AddOrUpdateNonPrimaryStateTaxPathParams;
}(SpeakeasyBase));
export { AddOrUpdateNonPrimaryStateTaxPathParams };
var AddOrUpdateNonPrimaryStateTaxSecurity = /** @class */ (function (_super) {
    __extends(AddOrUpdateNonPrimaryStateTaxSecurity, _super);
    function AddOrUpdateNonPrimaryStateTaxSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], AddOrUpdateNonPrimaryStateTaxSecurity.prototype, "paylocityAuth", void 0);
    return AddOrUpdateNonPrimaryStateTaxSecurity;
}(SpeakeasyBase));
export { AddOrUpdateNonPrimaryStateTaxSecurity };
var AddOrUpdateNonPrimaryStateTaxRequest = /** @class */ (function (_super) {
    __extends(AddOrUpdateNonPrimaryStateTaxRequest, _super);
    function AddOrUpdateNonPrimaryStateTaxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddOrUpdateNonPrimaryStateTaxPathParams)
    ], AddOrUpdateNonPrimaryStateTaxRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NonPrimaryStateTax)
    ], AddOrUpdateNonPrimaryStateTaxRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddOrUpdateNonPrimaryStateTaxSecurity)
    ], AddOrUpdateNonPrimaryStateTaxRequest.prototype, "security", void 0);
    return AddOrUpdateNonPrimaryStateTaxRequest;
}(SpeakeasyBase));
export { AddOrUpdateNonPrimaryStateTaxRequest };
var AddOrUpdateNonPrimaryStateTaxResponse = /** @class */ (function (_super) {
    __extends(AddOrUpdateNonPrimaryStateTaxResponse, _super);
    function AddOrUpdateNonPrimaryStateTaxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddOrUpdateNonPrimaryStateTaxResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddOrUpdateNonPrimaryStateTaxResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], AddOrUpdateNonPrimaryStateTaxResponse.prototype, "errors", void 0);
    return AddOrUpdateNonPrimaryStateTaxResponse;
}(SpeakeasyBase));
export { AddOrUpdateNonPrimaryStateTaxResponse };
