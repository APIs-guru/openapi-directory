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
var GetTagsTagsWikisPathParams = /** @class */ (function (_super) {
    __extends(GetTagsTagsWikisPathParams, _super);
    function GetTagsTagsWikisPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tags" }),
        __metadata("design:type", String)
    ], GetTagsTagsWikisPathParams.prototype, "tags", void 0);
    return GetTagsTagsWikisPathParams;
}(SpeakeasyBase));
export { GetTagsTagsWikisPathParams };
var GetTagsTagsWikisQueryParams = /** @class */ (function (_super) {
    __extends(GetTagsTagsWikisQueryParams, _super);
    function GetTagsTagsWikisQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetTagsTagsWikisQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetTagsTagsWikisQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTagsTagsWikisQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetTagsTagsWikisQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetTagsTagsWikisQueryParams.prototype, "site", void 0);
    return GetTagsTagsWikisQueryParams;
}(SpeakeasyBase));
export { GetTagsTagsWikisQueryParams };
var GetTagsTagsWikisRequest = /** @class */ (function (_super) {
    __extends(GetTagsTagsWikisRequest, _super);
    function GetTagsTagsWikisRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsTagsWikisPathParams)
    ], GetTagsTagsWikisRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsTagsWikisQueryParams)
    ], GetTagsTagsWikisRequest.prototype, "queryParams", void 0);
    return GetTagsTagsWikisRequest;
}(SpeakeasyBase));
export { GetTagsTagsWikisRequest };
var GetTagsTagsWikisResponse = /** @class */ (function (_super) {
    __extends(GetTagsTagsWikisResponse, _super);
    function GetTagsTagsWikisResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTagsTagsWikisResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagsTagsWikisResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagsTagsWikisResponse.prototype, "statusCode", void 0);
    return GetTagsTagsWikisResponse;
}(SpeakeasyBase));
export { GetTagsTagsWikisResponse };
