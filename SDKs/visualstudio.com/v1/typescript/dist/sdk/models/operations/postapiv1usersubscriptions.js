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
var PostApiV1UserSubscriptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostApiV1UserSubscriptionsQueryParams, _super);
    function PostApiV1UserSubscriptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], PostApiV1UserSubscriptionsQueryParams.prototype, "email", void 0);
    return PostApiV1UserSubscriptionsQueryParams;
}(SpeakeasyBase));
export { PostApiV1UserSubscriptionsQueryParams };
var PostApiV1UserSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(PostApiV1UserSubscriptionsRequest, _super);
    function PostApiV1UserSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApiV1UserSubscriptionsQueryParams)
    ], PostApiV1UserSubscriptionsRequest.prototype, "queryParams", void 0);
    return PostApiV1UserSubscriptionsRequest;
}(SpeakeasyBase));
export { PostApiV1UserSubscriptionsRequest };
var PostApiV1UserSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(PostApiV1UserSubscriptionsResponse, _super);
    function PostApiV1UserSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApiV1UserSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApiV1UserSubscriptionsResponse.prototype, "statusCode", void 0);
    return PostApiV1UserSubscriptionsResponse;
}(SpeakeasyBase));
export { PostApiV1UserSubscriptionsResponse };
