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
var PostTransactionAccountsIdTransactionsPathParams = /** @class */ (function (_super) {
    __extends(PostTransactionAccountsIdTransactionsPathParams, _super);
    function PostTransactionAccountsIdTransactionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostTransactionAccountsIdTransactionsPathParams.prototype, "id", void 0);
    return PostTransactionAccountsIdTransactionsPathParams;
}(SpeakeasyBase));
export { PostTransactionAccountsIdTransactionsPathParams };
var PostTransactionAccountsIdTransactionsRequestBody = /** @class */ (function (_super) {
    __extends(PostTransactionAccountsIdTransactionsRequestBody, _super);
    function PostTransactionAccountsIdTransactionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PostTransactionAccountsIdTransactionsRequestBody.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", Number)
    ], PostTransactionAccountsIdTransactionsRequestBody.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cheque_number" }),
        __metadata("design:type", String)
    ], PostTransactionAccountsIdTransactionsRequestBody.prototype, "chequeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], PostTransactionAccountsIdTransactionsRequestBody.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_transfer" }),
        __metadata("design:type", Boolean)
    ], PostTransactionAccountsIdTransactionsRequestBody.prototype, "isTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", String)
    ], PostTransactionAccountsIdTransactionsRequestBody.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], PostTransactionAccountsIdTransactionsRequestBody.prototype, "memo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], PostTransactionAccountsIdTransactionsRequestBody.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee" }),
        __metadata("design:type", String)
    ], PostTransactionAccountsIdTransactionsRequestBody.prototype, "payee", void 0);
    return PostTransactionAccountsIdTransactionsRequestBody;
}(SpeakeasyBase));
export { PostTransactionAccountsIdTransactionsRequestBody };
var PostTransactionAccountsIdTransactionsRequest = /** @class */ (function (_super) {
    __extends(PostTransactionAccountsIdTransactionsRequest, _super);
    function PostTransactionAccountsIdTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTransactionAccountsIdTransactionsPathParams)
    ], PostTransactionAccountsIdTransactionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostTransactionAccountsIdTransactionsRequestBody)
    ], PostTransactionAccountsIdTransactionsRequest.prototype, "request", void 0);
    return PostTransactionAccountsIdTransactionsRequest;
}(SpeakeasyBase));
export { PostTransactionAccountsIdTransactionsRequest };
var PostTransactionAccountsIdTransactionsResponse = /** @class */ (function (_super) {
    __extends(PostTransactionAccountsIdTransactionsResponse, _super);
    function PostTransactionAccountsIdTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTransactionAccountsIdTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PostTransactionAccountsIdTransactionsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTransactionAccountsIdTransactionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Transaction)
    ], PostTransactionAccountsIdTransactionsResponse.prototype, "transaction", void 0);
    return PostTransactionAccountsIdTransactionsResponse;
}(SpeakeasyBase));
export { PostTransactionAccountsIdTransactionsResponse };
