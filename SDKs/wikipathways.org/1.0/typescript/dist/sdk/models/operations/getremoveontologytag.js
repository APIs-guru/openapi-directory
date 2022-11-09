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
export var GetRemoveOntologyTagFormatEnum;
(function (GetRemoveOntologyTagFormatEnum) {
    GetRemoveOntologyTagFormatEnum["Json"] = "json";
    GetRemoveOntologyTagFormatEnum["Xml"] = "xml";
    GetRemoveOntologyTagFormatEnum["Html"] = "html";
    GetRemoveOntologyTagFormatEnum["Dump"] = "dump";
    GetRemoveOntologyTagFormatEnum["Jpg"] = "jpg";
    GetRemoveOntologyTagFormatEnum["Pdf"] = "pdf";
})(GetRemoveOntologyTagFormatEnum || (GetRemoveOntologyTagFormatEnum = {}));
var GetRemoveOntologyTagQueryParams = /** @class */ (function (_super) {
    __extends(GetRemoveOntologyTagQueryParams, _super);
    function GetRemoveOntologyTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=auth" }),
        __metadata("design:type", String)
    ], GetRemoveOntologyTagQueryParams.prototype, "auth", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetRemoveOntologyTagQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pwId" }),
        __metadata("design:type", String)
    ], GetRemoveOntologyTagQueryParams.prototype, "pwId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=termId" }),
        __metadata("design:type", String)
    ], GetRemoveOntologyTagQueryParams.prototype, "termId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", String)
    ], GetRemoveOntologyTagQueryParams.prototype, "user", void 0);
    return GetRemoveOntologyTagQueryParams;
}(SpeakeasyBase));
export { GetRemoveOntologyTagQueryParams };
var GetRemoveOntologyTagRequest = /** @class */ (function (_super) {
    __extends(GetRemoveOntologyTagRequest, _super);
    function GetRemoveOntologyTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemoveOntologyTagQueryParams)
    ], GetRemoveOntologyTagRequest.prototype, "queryParams", void 0);
    return GetRemoveOntologyTagRequest;
}(SpeakeasyBase));
export { GetRemoveOntologyTagRequest };
var GetRemoveOntologyTagResponse = /** @class */ (function (_super) {
    __extends(GetRemoveOntologyTagResponse, _super);
    function GetRemoveOntologyTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRemoveOntologyTagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRemoveOntologyTagResponse.prototype, "statusCode", void 0);
    return GetRemoveOntologyTagResponse;
}(SpeakeasyBase));
export { GetRemoveOntologyTagResponse };
