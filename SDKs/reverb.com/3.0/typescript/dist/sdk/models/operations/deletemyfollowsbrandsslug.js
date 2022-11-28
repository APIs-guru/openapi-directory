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
var DeleteMyFollowsBrandsSlugPathParams = /** @class */ (function (_super) {
    __extends(DeleteMyFollowsBrandsSlugPathParams, _super);
    function DeleteMyFollowsBrandsSlugPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" }),
        __metadata("design:type", String)
    ], DeleteMyFollowsBrandsSlugPathParams.prototype, "slug", void 0);
    return DeleteMyFollowsBrandsSlugPathParams;
}(SpeakeasyBase));
export { DeleteMyFollowsBrandsSlugPathParams };
var DeleteMyFollowsBrandsSlugSecurity = /** @class */ (function (_super) {
    __extends(DeleteMyFollowsBrandsSlugSecurity, _super);
    function DeleteMyFollowsBrandsSlugSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteMyFollowsBrandsSlugSecurity.prototype, "oauth2", void 0);
    return DeleteMyFollowsBrandsSlugSecurity;
}(SpeakeasyBase));
export { DeleteMyFollowsBrandsSlugSecurity };
var DeleteMyFollowsBrandsSlugRequest = /** @class */ (function (_super) {
    __extends(DeleteMyFollowsBrandsSlugRequest, _super);
    function DeleteMyFollowsBrandsSlugRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMyFollowsBrandsSlugPathParams)
    ], DeleteMyFollowsBrandsSlugRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMyFollowsBrandsSlugSecurity)
    ], DeleteMyFollowsBrandsSlugRequest.prototype, "security", void 0);
    return DeleteMyFollowsBrandsSlugRequest;
}(SpeakeasyBase));
export { DeleteMyFollowsBrandsSlugRequest };
var DeleteMyFollowsBrandsSlugResponse = /** @class */ (function (_super) {
    __extends(DeleteMyFollowsBrandsSlugResponse, _super);
    function DeleteMyFollowsBrandsSlugResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteMyFollowsBrandsSlugResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteMyFollowsBrandsSlugResponse.prototype, "statusCode", void 0);
    return DeleteMyFollowsBrandsSlugResponse;
}(SpeakeasyBase));
export { DeleteMyFollowsBrandsSlugResponse };
