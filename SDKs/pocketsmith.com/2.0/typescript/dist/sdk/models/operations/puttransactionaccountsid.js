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
var PutTransactionAccountsIdPathParams = /** @class */ (function (_super) {
    __extends(PutTransactionAccountsIdPathParams, _super);
    function PutTransactionAccountsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutTransactionAccountsIdPathParams.prototype, "id", void 0);
    return PutTransactionAccountsIdPathParams;
}(SpeakeasyBase));
export { PutTransactionAccountsIdPathParams };
var PutTransactionAccountsIdRequestBody = /** @class */ (function (_super) {
    __extends(PutTransactionAccountsIdRequestBody, _super);
    function PutTransactionAccountsIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=institution_id" }),
        __metadata("design:type", Number)
    ], PutTransactionAccountsIdRequestBody.prototype, "institutionId", void 0);
    return PutTransactionAccountsIdRequestBody;
}(SpeakeasyBase));
export { PutTransactionAccountsIdRequestBody };
var PutTransactionAccountsIdRequest = /** @class */ (function (_super) {
    __extends(PutTransactionAccountsIdRequest, _super);
    function PutTransactionAccountsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTransactionAccountsIdPathParams)
    ], PutTransactionAccountsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutTransactionAccountsIdRequestBody)
    ], PutTransactionAccountsIdRequest.prototype, "request", void 0);
    return PutTransactionAccountsIdRequest;
}(SpeakeasyBase));
export { PutTransactionAccountsIdRequest };
var PutTransactionAccountsIdResponse = /** @class */ (function (_super) {
    __extends(PutTransactionAccountsIdResponse, _super);
    function PutTransactionAccountsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutTransactionAccountsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PutTransactionAccountsIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutTransactionAccountsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TransactionAccount)
    ], PutTransactionAccountsIdResponse.prototype, "transactionAccount", void 0);
    return PutTransactionAccountsIdResponse;
}(SpeakeasyBase));
export { PutTransactionAccountsIdResponse };
