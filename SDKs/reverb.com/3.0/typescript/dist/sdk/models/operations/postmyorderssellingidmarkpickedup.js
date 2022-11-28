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
var PostMyOrdersSellingIdMarkPickedUpPathParams = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingIdMarkPickedUpPathParams, _super);
    function PostMyOrdersSellingIdMarkPickedUpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostMyOrdersSellingIdMarkPickedUpPathParams.prototype, "id", void 0);
    return PostMyOrdersSellingIdMarkPickedUpPathParams;
}(SpeakeasyBase));
export { PostMyOrdersSellingIdMarkPickedUpPathParams };
var PostMyOrdersSellingIdMarkPickedUpRequestBody = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingIdMarkPickedUpRequestBody, _super);
    function PostMyOrdersSellingIdMarkPickedUpRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], PostMyOrdersSellingIdMarkPickedUpRequestBody.prototype, "date", void 0);
    return PostMyOrdersSellingIdMarkPickedUpRequestBody;
}(SpeakeasyBase));
export { PostMyOrdersSellingIdMarkPickedUpRequestBody };
var PostMyOrdersSellingIdMarkPickedUpSecurity = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingIdMarkPickedUpSecurity, _super);
    function PostMyOrdersSellingIdMarkPickedUpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostMyOrdersSellingIdMarkPickedUpSecurity.prototype, "oauth2", void 0);
    return PostMyOrdersSellingIdMarkPickedUpSecurity;
}(SpeakeasyBase));
export { PostMyOrdersSellingIdMarkPickedUpSecurity };
var PostMyOrdersSellingIdMarkPickedUpRequest = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingIdMarkPickedUpRequest, _super);
    function PostMyOrdersSellingIdMarkPickedUpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyOrdersSellingIdMarkPickedUpPathParams)
    ], PostMyOrdersSellingIdMarkPickedUpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostMyOrdersSellingIdMarkPickedUpRequestBody)
    ], PostMyOrdersSellingIdMarkPickedUpRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyOrdersSellingIdMarkPickedUpSecurity)
    ], PostMyOrdersSellingIdMarkPickedUpRequest.prototype, "security", void 0);
    return PostMyOrdersSellingIdMarkPickedUpRequest;
}(SpeakeasyBase));
export { PostMyOrdersSellingIdMarkPickedUpRequest };
var PostMyOrdersSellingIdMarkPickedUpResponse = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingIdMarkPickedUpResponse, _super);
    function PostMyOrdersSellingIdMarkPickedUpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMyOrdersSellingIdMarkPickedUpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMyOrdersSellingIdMarkPickedUpResponse.prototype, "statusCode", void 0);
    return PostMyOrdersSellingIdMarkPickedUpResponse;
}(SpeakeasyBase));
export { PostMyOrdersSellingIdMarkPickedUpResponse };
