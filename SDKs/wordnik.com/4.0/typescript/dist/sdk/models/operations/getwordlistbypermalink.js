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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var GetWordListByPermalinkPathParams = /** @class */ (function (_super) {
    __extends(GetWordListByPermalinkPathParams, _super);
    function GetWordListByPermalinkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=permalink" }),
        __metadata("design:type", String)
    ], GetWordListByPermalinkPathParams.prototype, "permalink", void 0);
    return GetWordListByPermalinkPathParams;
}(SpeakeasyBase));
export { GetWordListByPermalinkPathParams };
var GetWordListByPermalinkHeaders = /** @class */ (function (_super) {
    __extends(GetWordListByPermalinkHeaders, _super);
    function GetWordListByPermalinkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=auth_token" }),
        __metadata("design:type", String)
    ], GetWordListByPermalinkHeaders.prototype, "authToken", void 0);
    return GetWordListByPermalinkHeaders;
}(SpeakeasyBase));
export { GetWordListByPermalinkHeaders };
var GetWordListByPermalinkRequest = /** @class */ (function (_super) {
    __extends(GetWordListByPermalinkRequest, _super);
    function GetWordListByPermalinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWordListByPermalinkPathParams)
    ], GetWordListByPermalinkRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWordListByPermalinkHeaders)
    ], GetWordListByPermalinkRequest.prototype, "headers", void 0);
    return GetWordListByPermalinkRequest;
}(SpeakeasyBase));
export { GetWordListByPermalinkRequest };
var GetWordListByPermalinkResponse = /** @class */ (function (_super) {
    __extends(GetWordListByPermalinkResponse, _super);
    function GetWordListByPermalinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetWordListByPermalinkResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWordListByPermalinkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWordListByPermalinkResponse.prototype, "statusCode", void 0);
    return GetWordListByPermalinkResponse;
}(SpeakeasyBase));
export { GetWordListByPermalinkResponse };
