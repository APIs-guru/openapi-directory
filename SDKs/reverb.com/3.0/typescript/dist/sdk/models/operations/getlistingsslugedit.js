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
var GetListingsSlugEditPathParams = /** @class */ (function (_super) {
    __extends(GetListingsSlugEditPathParams, _super);
    function GetListingsSlugEditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" }),
        __metadata("design:type", String)
    ], GetListingsSlugEditPathParams.prototype, "slug", void 0);
    return GetListingsSlugEditPathParams;
}(SpeakeasyBase));
export { GetListingsSlugEditPathParams };
var GetListingsSlugEditSecurity = /** @class */ (function (_super) {
    __extends(GetListingsSlugEditSecurity, _super);
    function GetListingsSlugEditSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetListingsSlugEditSecurity.prototype, "oauth2", void 0);
    return GetListingsSlugEditSecurity;
}(SpeakeasyBase));
export { GetListingsSlugEditSecurity };
var GetListingsSlugEditRequest = /** @class */ (function (_super) {
    __extends(GetListingsSlugEditRequest, _super);
    function GetListingsSlugEditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingsSlugEditPathParams)
    ], GetListingsSlugEditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingsSlugEditSecurity)
    ], GetListingsSlugEditRequest.prototype, "security", void 0);
    return GetListingsSlugEditRequest;
}(SpeakeasyBase));
export { GetListingsSlugEditRequest };
var GetListingsSlugEditResponse = /** @class */ (function (_super) {
    __extends(GetListingsSlugEditResponse, _super);
    function GetListingsSlugEditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListingsSlugEditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListingsSlugEditResponse.prototype, "statusCode", void 0);
    return GetListingsSlugEditResponse;
}(SpeakeasyBase));
export { GetListingsSlugEditResponse };
