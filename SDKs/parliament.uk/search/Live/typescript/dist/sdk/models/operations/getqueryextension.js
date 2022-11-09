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
export var GetQueryExtensionExtensionEnum;
(function (GetQueryExtensionExtensionEnum) {
    GetQueryExtensionExtensionEnum["Atom"] = "atom";
    GetQueryExtensionExtensionEnum["Rss"] = "rss";
    GetQueryExtensionExtensionEnum["Html"] = "html";
    GetQueryExtensionExtensionEnum["Json"] = "json";
})(GetQueryExtensionExtensionEnum || (GetQueryExtensionExtensionEnum = {}));
var GetQueryExtensionPathParams = /** @class */ (function (_super) {
    __extends(GetQueryExtensionPathParams, _super);
    function GetQueryExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=extension" }),
        __metadata("design:type", String)
    ], GetQueryExtensionPathParams.prototype, "extension", void 0);
    return GetQueryExtensionPathParams;
}(SpeakeasyBase));
export { GetQueryExtensionPathParams };
var GetQueryExtensionQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryExtensionQueryParams, _super);
    function GetQueryExtensionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetQueryExtensionQueryParams.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=inUrlPrefixes" }),
        __metadata("design:type", String)
    ], GetQueryExtensionQueryParams.prototype, "inUrlPrefixes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetQueryExtensionQueryParams.prototype, "q", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetQueryExtensionQueryParams.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=subdomains" }),
        __metadata("design:type", String)
    ], GetQueryExtensionQueryParams.prototype, "subdomains", void 0);
    return GetQueryExtensionQueryParams;
}(SpeakeasyBase));
export { GetQueryExtensionQueryParams };
var GetQueryExtensionRequest = /** @class */ (function (_super) {
    __extends(GetQueryExtensionRequest, _super);
    function GetQueryExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetQueryExtensionPathParams)
    ], GetQueryExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetQueryExtensionQueryParams)
    ], GetQueryExtensionRequest.prototype, "queryParams", void 0);
    return GetQueryExtensionRequest;
}(SpeakeasyBase));
export { GetQueryExtensionRequest };
var GetQueryExtensionResponse = /** @class */ (function (_super) {
    __extends(GetQueryExtensionResponse, _super);
    function GetQueryExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetQueryExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetQueryExtensionResponse.prototype, "statusCode", void 0);
    return GetQueryExtensionResponse;
}(SpeakeasyBase));
export { GetQueryExtensionResponse };
