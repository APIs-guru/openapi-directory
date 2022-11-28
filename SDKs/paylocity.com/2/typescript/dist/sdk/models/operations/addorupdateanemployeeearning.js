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
var AddOrUpdateAnEmployeeEarningPathParams = /** @class */ (function (_super) {
    __extends(AddOrUpdateAnEmployeeEarningPathParams, _super);
    function AddOrUpdateAnEmployeeEarningPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], AddOrUpdateAnEmployeeEarningPathParams.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], AddOrUpdateAnEmployeeEarningPathParams.prototype, "employeeId", void 0);
    return AddOrUpdateAnEmployeeEarningPathParams;
}(SpeakeasyBase));
export { AddOrUpdateAnEmployeeEarningPathParams };
var AddOrUpdateAnEmployeeEarningSecurity = /** @class */ (function (_super) {
    __extends(AddOrUpdateAnEmployeeEarningSecurity, _super);
    function AddOrUpdateAnEmployeeEarningSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], AddOrUpdateAnEmployeeEarningSecurity.prototype, "paylocityAuth", void 0);
    return AddOrUpdateAnEmployeeEarningSecurity;
}(SpeakeasyBase));
export { AddOrUpdateAnEmployeeEarningSecurity };
var AddOrUpdateAnEmployeeEarningRequest = /** @class */ (function (_super) {
    __extends(AddOrUpdateAnEmployeeEarningRequest, _super);
    function AddOrUpdateAnEmployeeEarningRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddOrUpdateAnEmployeeEarningPathParams)
    ], AddOrUpdateAnEmployeeEarningRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Earning)
    ], AddOrUpdateAnEmployeeEarningRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddOrUpdateAnEmployeeEarningSecurity)
    ], AddOrUpdateAnEmployeeEarningRequest.prototype, "security", void 0);
    return AddOrUpdateAnEmployeeEarningRequest;
}(SpeakeasyBase));
export { AddOrUpdateAnEmployeeEarningRequest };
var AddOrUpdateAnEmployeeEarningResponse = /** @class */ (function (_super) {
    __extends(AddOrUpdateAnEmployeeEarningResponse, _super);
    function AddOrUpdateAnEmployeeEarningResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddOrUpdateAnEmployeeEarningResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddOrUpdateAnEmployeeEarningResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], AddOrUpdateAnEmployeeEarningResponse.prototype, "errors", void 0);
    return AddOrUpdateAnEmployeeEarningResponse;
}(SpeakeasyBase));
export { AddOrUpdateAnEmployeeEarningResponse };
