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
var GetPayeeLocationByIdPathParams = /** @class */ (function (_super) {
    __extends(GetPayeeLocationByIdPathParams, _super);
    function GetPayeeLocationByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" }),
        __metadata("design:type", String)
    ], GetPayeeLocationByIdPathParams.prototype, "budgetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payee_location_id" }),
        __metadata("design:type", String)
    ], GetPayeeLocationByIdPathParams.prototype, "payeeLocationId", void 0);
    return GetPayeeLocationByIdPathParams;
}(SpeakeasyBase));
export { GetPayeeLocationByIdPathParams };
var GetPayeeLocationByIdRequest = /** @class */ (function (_super) {
    __extends(GetPayeeLocationByIdRequest, _super);
    function GetPayeeLocationByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayeeLocationByIdPathParams)
    ], GetPayeeLocationByIdRequest.prototype, "pathParams", void 0);
    return GetPayeeLocationByIdRequest;
}(SpeakeasyBase));
export { GetPayeeLocationByIdRequest };
var GetPayeeLocationByIdResponse = /** @class */ (function (_super) {
    __extends(GetPayeeLocationByIdResponse, _super);
    function GetPayeeLocationByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayeeLocationByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetPayeeLocationByIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayeeLocationResponse)
    ], GetPayeeLocationByIdResponse.prototype, "payeeLocationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayeeLocationByIdResponse.prototype, "statusCode", void 0);
    return GetPayeeLocationByIdResponse;
}(SpeakeasyBase));
export { GetPayeeLocationByIdResponse };
