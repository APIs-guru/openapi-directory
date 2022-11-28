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
var TagApiGetNamesQueryParams = /** @class */ (function (_super) {
    __extends(TagApiGetNamesQueryParams, _super);
    function TagApiGetNamesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowAliases" }),
        __metadata("design:type", Boolean)
    ], TagApiGetNamesQueryParams.prototype, "allowAliases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], TagApiGetNamesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], TagApiGetNamesQueryParams.prototype, "query", void 0);
    return TagApiGetNamesQueryParams;
}(SpeakeasyBase));
export { TagApiGetNamesQueryParams };
var TagApiGetNamesRequest = /** @class */ (function (_super) {
    __extends(TagApiGetNamesRequest, _super);
    function TagApiGetNamesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagApiGetNamesQueryParams)
    ], TagApiGetNamesRequest.prototype, "queryParams", void 0);
    return TagApiGetNamesRequest;
}(SpeakeasyBase));
export { TagApiGetNamesRequest };
var TagApiGetNamesResponse = /** @class */ (function (_super) {
    __extends(TagApiGetNamesResponse, _super);
    function TagApiGetNamesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TagApiGetNamesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagApiGetNamesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagApiGetNamesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], TagApiGetNamesResponse.prototype, "tagApiGetNames200ApplicationJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], TagApiGetNamesResponse.prototype, "tagApiGetNames200ApplicationJsonpStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], TagApiGetNamesResponse.prototype, "tagApiGetNames200TextJsonStrings", void 0);
    return TagApiGetNamesResponse;
}(SpeakeasyBase));
export { TagApiGetNamesResponse };
