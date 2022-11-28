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
var GetPersonasQueryParams = /** @class */ (function (_super) {
    __extends(GetPersonasQueryParams, _super);
    function GetPersonasQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetPersonasQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], GetPersonasQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetPersonasQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetPersonasQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPersonasQueryParams.prototype, "page", void 0);
    return GetPersonasQueryParams;
}(SpeakeasyBase));
export { GetPersonasQueryParams };
var GetPersonas200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(GetPersonas200ApplicationJsonLinks, _super);
    function GetPersonas200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", shared.Link)
    ], GetPersonas200ApplicationJsonLinks.prototype, "self", void 0);
    return GetPersonas200ApplicationJsonLinks;
}(SpeakeasyBase));
export { GetPersonas200ApplicationJsonLinks };
var GetPersonas200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPersonas200ApplicationJson, _super);
    function GetPersonas200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", GetPersonas200ApplicationJsonLinks)
    ], GetPersonas200ApplicationJson.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_meta" }),
        __metadata("design:type", shared.Pagination)
    ], GetPersonas200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.Persona }),
        __metadata("design:type", Array)
    ], GetPersonas200ApplicationJson.prototype, "items", void 0);
    return GetPersonas200ApplicationJson;
}(SpeakeasyBase));
export { GetPersonas200ApplicationJson };
var GetPersonasRequest = /** @class */ (function (_super) {
    __extends(GetPersonasRequest, _super);
    function GetPersonasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonasQueryParams)
    ], GetPersonasRequest.prototype, "queryParams", void 0);
    return GetPersonasRequest;
}(SpeakeasyBase));
export { GetPersonasRequest };
var GetPersonasResponse = /** @class */ (function (_super) {
    __extends(GetPersonasResponse, _super);
    function GetPersonasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPersonasResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPersonasResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonas200ApplicationJson)
    ], GetPersonasResponse.prototype, "getPersonas200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPersonasResponse.prototype, "statusCode", void 0);
    return GetPersonasResponse;
}(SpeakeasyBase));
export { GetPersonasResponse };
