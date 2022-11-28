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
export var GetSaveOntologyTagFormatEnum;
(function (GetSaveOntologyTagFormatEnum) {
    GetSaveOntologyTagFormatEnum["Json"] = "json";
    GetSaveOntologyTagFormatEnum["Xml"] = "xml";
    GetSaveOntologyTagFormatEnum["Html"] = "html";
    GetSaveOntologyTagFormatEnum["Dump"] = "dump";
    GetSaveOntologyTagFormatEnum["Jpg"] = "jpg";
    GetSaveOntologyTagFormatEnum["Pdf"] = "pdf";
})(GetSaveOntologyTagFormatEnum || (GetSaveOntologyTagFormatEnum = {}));
var GetSaveOntologyTagQueryParams = /** @class */ (function (_super) {
    __extends(GetSaveOntologyTagQueryParams, _super);
    function GetSaveOntologyTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth" }),
        __metadata("design:type", String)
    ], GetSaveOntologyTagQueryParams.prototype, "auth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetSaveOntologyTagQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" }),
        __metadata("design:type", String)
    ], GetSaveOntologyTagQueryParams.prototype, "pwId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term" }),
        __metadata("design:type", String)
    ], GetSaveOntologyTagQueryParams.prototype, "term", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=termId" }),
        __metadata("design:type", String)
    ], GetSaveOntologyTagQueryParams.prototype, "termId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", String)
    ], GetSaveOntologyTagQueryParams.prototype, "user", void 0);
    return GetSaveOntologyTagQueryParams;
}(SpeakeasyBase));
export { GetSaveOntologyTagQueryParams };
var GetSaveOntologyTagRequest = /** @class */ (function (_super) {
    __extends(GetSaveOntologyTagRequest, _super);
    function GetSaveOntologyTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSaveOntologyTagQueryParams)
    ], GetSaveOntologyTagRequest.prototype, "queryParams", void 0);
    return GetSaveOntologyTagRequest;
}(SpeakeasyBase));
export { GetSaveOntologyTagRequest };
var GetSaveOntologyTagResponse = /** @class */ (function (_super) {
    __extends(GetSaveOntologyTagResponse, _super);
    function GetSaveOntologyTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSaveOntologyTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSaveOntologyTagResponse.prototype, "statusCode", void 0);
    return GetSaveOntologyTagResponse;
}(SpeakeasyBase));
export { GetSaveOntologyTagResponse };
