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
var PutProductsReviewsIdPathParams = /** @class */ (function (_super) {
    __extends(PutProductsReviewsIdPathParams, _super);
    function PutProductsReviewsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutProductsReviewsIdPathParams.prototype, "id", void 0);
    return PutProductsReviewsIdPathParams;
}(SpeakeasyBase));
export { PutProductsReviewsIdPathParams };
var PutProductsReviewsIdRequestBody = /** @class */ (function (_super) {
    __extends(PutProductsReviewsIdRequestBody, _super);
    function PutProductsReviewsIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PutProductsReviewsIdRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], PutProductsReviewsIdRequestBody.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PutProductsReviewsIdRequestBody.prototype, "title", void 0);
    return PutProductsReviewsIdRequestBody;
}(SpeakeasyBase));
export { PutProductsReviewsIdRequestBody };
var PutProductsReviewsIdSecurity = /** @class */ (function (_super) {
    __extends(PutProductsReviewsIdSecurity, _super);
    function PutProductsReviewsIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutProductsReviewsIdSecurity.prototype, "oauth2", void 0);
    return PutProductsReviewsIdSecurity;
}(SpeakeasyBase));
export { PutProductsReviewsIdSecurity };
var PutProductsReviewsIdRequest = /** @class */ (function (_super) {
    __extends(PutProductsReviewsIdRequest, _super);
    function PutProductsReviewsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutProductsReviewsIdPathParams)
    ], PutProductsReviewsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutProductsReviewsIdRequestBody)
    ], PutProductsReviewsIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutProductsReviewsIdSecurity)
    ], PutProductsReviewsIdRequest.prototype, "security", void 0);
    return PutProductsReviewsIdRequest;
}(SpeakeasyBase));
export { PutProductsReviewsIdRequest };
var PutProductsReviewsIdResponse = /** @class */ (function (_super) {
    __extends(PutProductsReviewsIdResponse, _super);
    function PutProductsReviewsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutProductsReviewsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutProductsReviewsIdResponse.prototype, "statusCode", void 0);
    return PutProductsReviewsIdResponse;
}(SpeakeasyBase));
export { PutProductsReviewsIdResponse };
