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
var GetPdfPathParams = /** @class */ (function (_super) {
    __extends(GetPdfPathParams, _super);
    function GetPdfPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=check_id" }),
        __metadata("design:type", String)
    ], GetPdfPathParams.prototype, "checkId", void 0);
    return GetPdfPathParams;
}(SpeakeasyBase));
export { GetPdfPathParams };
var GetPdfQueryParams = /** @class */ (function (_super) {
    __extends(GetPdfQueryParams, _super);
    function GetPdfQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetPdfQueryParams.prototype, "lang", void 0);
    return GetPdfQueryParams;
}(SpeakeasyBase));
export { GetPdfQueryParams };
var GetPdfRequest = /** @class */ (function (_super) {
    __extends(GetPdfRequest, _super);
    function GetPdfRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPdfPathParams)
    ], GetPdfRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPdfQueryParams)
    ], GetPdfRequest.prototype, "queryParams", void 0);
    return GetPdfRequest;
}(SpeakeasyBase));
export { GetPdfRequest };
var GetPdfResponse = /** @class */ (function (_super) {
    __extends(GetPdfResponse, _super);
    function GetPdfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPdfResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPdfResponse.prototype, "statusCode", void 0);
    return GetPdfResponse;
}(SpeakeasyBase));
export { GetPdfResponse };
