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
export var GetFindPathwaysByTextFormatEnum;
(function (GetFindPathwaysByTextFormatEnum) {
    GetFindPathwaysByTextFormatEnum["Json"] = "json";
    GetFindPathwaysByTextFormatEnum["Xml"] = "xml";
    GetFindPathwaysByTextFormatEnum["Html"] = "html";
    GetFindPathwaysByTextFormatEnum["Dump"] = "dump";
    GetFindPathwaysByTextFormatEnum["Jpg"] = "jpg";
    GetFindPathwaysByTextFormatEnum["Pdf"] = "pdf";
})(GetFindPathwaysByTextFormatEnum || (GetFindPathwaysByTextFormatEnum = {}));
var GetFindPathwaysByTextQueryParams = /** @class */ (function (_super) {
    __extends(GetFindPathwaysByTextQueryParams, _super);
    function GetFindPathwaysByTextQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetFindPathwaysByTextQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetFindPathwaysByTextQueryParams.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=species" }),
        __metadata("design:type", String)
    ], GetFindPathwaysByTextQueryParams.prototype, "species", void 0);
    return GetFindPathwaysByTextQueryParams;
}(SpeakeasyBase));
export { GetFindPathwaysByTextQueryParams };
var GetFindPathwaysByTextRequest = /** @class */ (function (_super) {
    __extends(GetFindPathwaysByTextRequest, _super);
    function GetFindPathwaysByTextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFindPathwaysByTextQueryParams)
    ], GetFindPathwaysByTextRequest.prototype, "queryParams", void 0);
    return GetFindPathwaysByTextRequest;
}(SpeakeasyBase));
export { GetFindPathwaysByTextRequest };
var GetFindPathwaysByTextResponse = /** @class */ (function (_super) {
    __extends(GetFindPathwaysByTextResponse, _super);
    function GetFindPathwaysByTextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFindPathwaysByTextResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFindPathwaysByTextResponse.prototype, "statusCode", void 0);
    return GetFindPathwaysByTextResponse;
}(SpeakeasyBase));
export { GetFindPathwaysByTextResponse };
