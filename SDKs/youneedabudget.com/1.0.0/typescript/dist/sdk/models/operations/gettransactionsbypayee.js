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
var GetTransactionsByPayeePathParams = /** @class */ (function (_super) {
    __extends(GetTransactionsByPayeePathParams, _super);
    function GetTransactionsByPayeePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" }),
        __metadata("design:type", String)
    ], GetTransactionsByPayeePathParams.prototype, "budgetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payee_id" }),
        __metadata("design:type", String)
    ], GetTransactionsByPayeePathParams.prototype, "payeeId", void 0);
    return GetTransactionsByPayeePathParams;
}(SpeakeasyBase));
export { GetTransactionsByPayeePathParams };
export var GetTransactionsByPayeeTypeEnum;
(function (GetTransactionsByPayeeTypeEnum) {
    GetTransactionsByPayeeTypeEnum["Uncategorized"] = "uncategorized";
    GetTransactionsByPayeeTypeEnum["Unapproved"] = "unapproved";
})(GetTransactionsByPayeeTypeEnum || (GetTransactionsByPayeeTypeEnum = {}));
var GetTransactionsByPayeeQueryParams = /** @class */ (function (_super) {
    __extends(GetTransactionsByPayeeQueryParams, _super);
    function GetTransactionsByPayeeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" }),
        __metadata("design:type", Number)
    ], GetTransactionsByPayeeQueryParams.prototype, "lastKnowledgeOfServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since_date" }),
        __metadata("design:type", Date)
    ], GetTransactionsByPayeeQueryParams.prototype, "sinceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetTransactionsByPayeeQueryParams.prototype, "type", void 0);
    return GetTransactionsByPayeeQueryParams;
}(SpeakeasyBase));
export { GetTransactionsByPayeeQueryParams };
var GetTransactionsByPayeeRequest = /** @class */ (function (_super) {
    __extends(GetTransactionsByPayeeRequest, _super);
    function GetTransactionsByPayeeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionsByPayeePathParams)
    ], GetTransactionsByPayeeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionsByPayeeQueryParams)
    ], GetTransactionsByPayeeRequest.prototype, "queryParams", void 0);
    return GetTransactionsByPayeeRequest;
}(SpeakeasyBase));
export { GetTransactionsByPayeeRequest };
var GetTransactionsByPayeeResponse = /** @class */ (function (_super) {
    __extends(GetTransactionsByPayeeResponse, _super);
    function GetTransactionsByPayeeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTransactionsByPayeeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetTransactionsByPayeeResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HybridTransactionsResponse)
    ], GetTransactionsByPayeeResponse.prototype, "hybridTransactionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTransactionsByPayeeResponse.prototype, "statusCode", void 0);
    return GetTransactionsByPayeeResponse;
}(SpeakeasyBase));
export { GetTransactionsByPayeeResponse };
