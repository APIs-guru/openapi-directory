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
export var GetContentTypeEnum;
(function (GetContentTypeEnum) {
    GetContentTypeEnum["ApplicationJson"] = "application/json";
    GetContentTypeEnum["TextHtml"] = "text/html";
    GetContentTypeEnum["TextXml"] = "text/xml";
    GetContentTypeEnum["ApplicationXml"] = "application/xml";
})(GetContentTypeEnum || (GetContentTypeEnum = {}));
export var GetHypermediaEnum;
(function (GetHypermediaEnum) {
    GetHypermediaEnum["Yes"] = "yes";
    GetHypermediaEnum["No"] = "no";
})(GetHypermediaEnum || (GetHypermediaEnum = {}));
var GetQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryParams, _super);
    function GetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content-type" }),
        __metadata("design:type", String)
    ], GetQueryParams.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hypermedia" }),
        __metadata("design:type", String)
    ], GetQueryParams.prototype, "hypermedia", void 0);
    return GetQueryParams;
}(SpeakeasyBase));
export { GetQueryParams };
export var Get200ApplicationJsonStatusEnum;
(function (Get200ApplicationJsonStatusEnum) {
    Get200ApplicationJsonStatusEnum["Ok"] = "OK";
})(Get200ApplicationJsonStatusEnum || (Get200ApplicationJsonStatusEnum = {}));
var Get200ApplicationJson = /** @class */ (function (_super) {
    __extends(Get200ApplicationJson, _super);
    function Get200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Get200ApplicationJson.prototype, "status", void 0);
    return Get200ApplicationJson;
}(SpeakeasyBase));
export { Get200ApplicationJson };
var GetRequest = /** @class */ (function (_super) {
    __extends(GetRequest, _super);
    function GetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryParams)
    ], GetRequest.prototype, "queryParams", void 0);
    return GetRequest;
}(SpeakeasyBase));
export { GetRequest };
var GetResponse = /** @class */ (function (_super) {
    __extends(GetResponse, _super);
    function GetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Get200ApplicationJson)
    ], GetResponse.prototype, "get200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResponse.prototype, "statusCode", void 0);
    return GetResponse;
}(SpeakeasyBase));
export { GetResponse };
