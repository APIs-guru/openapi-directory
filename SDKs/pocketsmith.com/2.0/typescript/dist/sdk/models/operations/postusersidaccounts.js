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
var PostUsersIdAccountsPathParams = /** @class */ (function (_super) {
    __extends(PostUsersIdAccountsPathParams, _super);
    function PostUsersIdAccountsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostUsersIdAccountsPathParams.prototype, "id", void 0);
    return PostUsersIdAccountsPathParams;
}(SpeakeasyBase));
export { PostUsersIdAccountsPathParams };
export var PostUsersIdAccountsRequestBodyTypeEnum;
(function (PostUsersIdAccountsRequestBodyTypeEnum) {
    PostUsersIdAccountsRequestBodyTypeEnum["Bank"] = "bank";
    PostUsersIdAccountsRequestBodyTypeEnum["Credits"] = "credits";
    PostUsersIdAccountsRequestBodyTypeEnum["Loans"] = "loans";
    PostUsersIdAccountsRequestBodyTypeEnum["Mortgage"] = "mortgage";
    PostUsersIdAccountsRequestBodyTypeEnum["Stocks"] = "stocks";
    PostUsersIdAccountsRequestBodyTypeEnum["Vehicle"] = "vehicle";
    PostUsersIdAccountsRequestBodyTypeEnum["Property"] = "property";
    PostUsersIdAccountsRequestBodyTypeEnum["OtherAsset"] = "other_asset";
    PostUsersIdAccountsRequestBodyTypeEnum["OtherLiability"] = "other_liability";
})(PostUsersIdAccountsRequestBodyTypeEnum || (PostUsersIdAccountsRequestBodyTypeEnum = {}));
var PostUsersIdAccountsRequestBody = /** @class */ (function (_super) {
    __extends(PostUsersIdAccountsRequestBody, _super);
    function PostUsersIdAccountsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_code" }),
        __metadata("design:type", String)
    ], PostUsersIdAccountsRequestBody.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=institution_id" }),
        __metadata("design:type", Number)
    ], PostUsersIdAccountsRequestBody.prototype, "institutionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostUsersIdAccountsRequestBody.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostUsersIdAccountsRequestBody.prototype, "type", void 0);
    return PostUsersIdAccountsRequestBody;
}(SpeakeasyBase));
export { PostUsersIdAccountsRequestBody };
var PostUsersIdAccountsRequest = /** @class */ (function (_super) {
    __extends(PostUsersIdAccountsRequest, _super);
    function PostUsersIdAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersIdAccountsPathParams)
    ], PostUsersIdAccountsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostUsersIdAccountsRequestBody)
    ], PostUsersIdAccountsRequest.prototype, "request", void 0);
    return PostUsersIdAccountsRequest;
}(SpeakeasyBase));
export { PostUsersIdAccountsRequest };
var PostUsersIdAccountsResponse = /** @class */ (function (_super) {
    __extends(PostUsersIdAccountsResponse, _super);
    function PostUsersIdAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Account)
    ], PostUsersIdAccountsResponse.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersIdAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PostUsersIdAccountsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersIdAccountsResponse.prototype, "statusCode", void 0);
    return PostUsersIdAccountsResponse;
}(SpeakeasyBase));
export { PostUsersIdAccountsResponse };
