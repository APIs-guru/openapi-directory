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
import * as shared from "../shared";
var PlatformsListQueryParams = /** @class */ (function (_super) {
    __extends(PlatformsListQueryParams, _super);
    function PlatformsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], PlatformsListQueryParams.prototype, "ordering", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], PlatformsListQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], PlatformsListQueryParams.prototype, "pageSize", void 0);
    return PlatformsListQueryParams;
}(SpeakeasyBase));
export { PlatformsListQueryParams };
var PlatformsListRequest = /** @class */ (function (_super) {
    __extends(PlatformsListRequest, _super);
    function PlatformsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PlatformsListQueryParams)
    ], PlatformsListRequest.prototype, "queryParams", void 0);
    return PlatformsListRequest;
}(SpeakeasyBase));
export { PlatformsListRequest };
var PlatformsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(PlatformsList200ApplicationJson, _super);
    function PlatformsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], PlatformsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], PlatformsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        Metadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], PlatformsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.Platform }),
        __metadata("design:type", Array)
    ], PlatformsList200ApplicationJson.prototype, "results", void 0);
    return PlatformsList200ApplicationJson;
}(SpeakeasyBase));
export { PlatformsList200ApplicationJson };
var PlatformsListResponse = /** @class */ (function (_super) {
    __extends(PlatformsListResponse, _super);
    function PlatformsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PlatformsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PlatformsListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PlatformsList200ApplicationJson)
    ], PlatformsListResponse.prototype, "platformsList200ApplicationJsonObject", void 0);
    return PlatformsListResponse;
}(SpeakeasyBase));
export { PlatformsListResponse };
