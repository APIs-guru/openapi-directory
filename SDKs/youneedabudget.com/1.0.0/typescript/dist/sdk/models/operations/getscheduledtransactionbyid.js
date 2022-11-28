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
var GetScheduledTransactionByIdPathParams = /** @class */ (function (_super) {
    __extends(GetScheduledTransactionByIdPathParams, _super);
    function GetScheduledTransactionByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" }),
        __metadata("design:type", String)
    ], GetScheduledTransactionByIdPathParams.prototype, "budgetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduled_transaction_id" }),
        __metadata("design:type", String)
    ], GetScheduledTransactionByIdPathParams.prototype, "scheduledTransactionId", void 0);
    return GetScheduledTransactionByIdPathParams;
}(SpeakeasyBase));
export { GetScheduledTransactionByIdPathParams };
var GetScheduledTransactionByIdRequest = /** @class */ (function (_super) {
    __extends(GetScheduledTransactionByIdRequest, _super);
    function GetScheduledTransactionByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScheduledTransactionByIdPathParams)
    ], GetScheduledTransactionByIdRequest.prototype, "pathParams", void 0);
    return GetScheduledTransactionByIdRequest;
}(SpeakeasyBase));
export { GetScheduledTransactionByIdRequest };
var GetScheduledTransactionByIdResponse = /** @class */ (function (_super) {
    __extends(GetScheduledTransactionByIdResponse, _super);
    function GetScheduledTransactionByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetScheduledTransactionByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetScheduledTransactionByIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScheduledTransactionResponse)
    ], GetScheduledTransactionByIdResponse.prototype, "scheduledTransactionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetScheduledTransactionByIdResponse.prototype, "statusCode", void 0);
    return GetScheduledTransactionByIdResponse;
}(SpeakeasyBase));
export { GetScheduledTransactionByIdResponse };
