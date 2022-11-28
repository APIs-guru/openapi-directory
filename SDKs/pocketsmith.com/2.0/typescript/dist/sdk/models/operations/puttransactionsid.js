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
var PutTransactionsIdPathParams = /** @class */ (function (_super) {
    __extends(PutTransactionsIdPathParams, _super);
    function PutTransactionsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutTransactionsIdPathParams.prototype, "id", void 0);
    return PutTransactionsIdPathParams;
}(SpeakeasyBase));
export { PutTransactionsIdPathParams };
var PutTransactionsIdQueryParams = /** @class */ (function (_super) {
    __extends(PutTransactionsIdQueryParams, _super);
    function PutTransactionsIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labels" }),
        __metadata("design:type", String)
    ], PutTransactionsIdQueryParams.prototype, "labels", void 0);
    return PutTransactionsIdQueryParams;
}(SpeakeasyBase));
export { PutTransactionsIdQueryParams };
var PutTransactionsIdRequestBody = /** @class */ (function (_super) {
    __extends(PutTransactionsIdRequestBody, _super);
    function PutTransactionsIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PutTransactionsIdRequestBody.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", Number)
    ], PutTransactionsIdRequestBody.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cheque_number" }),
        __metadata("design:type", String)
    ], PutTransactionsIdRequestBody.prototype, "chequeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], PutTransactionsIdRequestBody.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_transfer" }),
        __metadata("design:type", Boolean)
    ], PutTransactionsIdRequestBody.prototype, "isTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], PutTransactionsIdRequestBody.prototype, "memo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], PutTransactionsIdRequestBody.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee" }),
        __metadata("design:type", String)
    ], PutTransactionsIdRequestBody.prototype, "payee", void 0);
    return PutTransactionsIdRequestBody;
}(SpeakeasyBase));
export { PutTransactionsIdRequestBody };
var PutTransactionsIdRequest = /** @class */ (function (_super) {
    __extends(PutTransactionsIdRequest, _super);
    function PutTransactionsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTransactionsIdPathParams)
    ], PutTransactionsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTransactionsIdQueryParams)
    ], PutTransactionsIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutTransactionsIdRequestBody)
    ], PutTransactionsIdRequest.prototype, "request", void 0);
    return PutTransactionsIdRequest;
}(SpeakeasyBase));
export { PutTransactionsIdRequest };
var PutTransactionsIdResponse = /** @class */ (function (_super) {
    __extends(PutTransactionsIdResponse, _super);
    function PutTransactionsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutTransactionsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PutTransactionsIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutTransactionsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Transaction)
    ], PutTransactionsIdResponse.prototype, "transaction", void 0);
    return PutTransactionsIdResponse;
}(SpeakeasyBase));
export { PutTransactionsIdResponse };
