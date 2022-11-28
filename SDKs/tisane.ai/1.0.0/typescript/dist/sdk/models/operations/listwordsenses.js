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
var ListWordSensesQueryParams = /** @class */ (function (_super) {
    __extends(ListWordSensesQueryParams, _super);
    function ListWordSensesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], ListWordSensesQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=word" }),
        __metadata("design:type", String)
    ], ListWordSensesQueryParams.prototype, "word", void 0);
    return ListWordSensesQueryParams;
}(SpeakeasyBase));
export { ListWordSensesQueryParams };
var ListWordSenses200ApplicationJsonFamilies = /** @class */ (function (_super) {
    __extends(ListWordSenses200ApplicationJsonFamilies, _super);
    function ListWordSenses200ApplicationJsonFamilies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Key" }),
        __metadata("design:type", Number)
    ], ListWordSenses200ApplicationJsonFamilies.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Value" }),
        __metadata("design:type", Map)
    ], ListWordSenses200ApplicationJsonFamilies.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definition" }),
        __metadata("design:type", String)
    ], ListWordSenses200ApplicationJsonFamilies.prototype, "definition", void 0);
    return ListWordSenses200ApplicationJsonFamilies;
}(SpeakeasyBase));
export { ListWordSenses200ApplicationJsonFamilies };
var ListWordSenses200ApplicationJsonFeatures = /** @class */ (function (_super) {
    __extends(ListWordSenses200ApplicationJsonFeatures, _super);
    function ListWordSenses200ApplicationJsonFeatures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], ListWordSenses200ApplicationJsonFeatures.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ListWordSenses200ApplicationJsonFeatures.prototype, "value", void 0);
    return ListWordSenses200ApplicationJsonFeatures;
}(SpeakeasyBase));
export { ListWordSenses200ApplicationJsonFeatures };
var ListWordSenses200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListWordSenses200ApplicationJson, _super);
    function ListWordSenses200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=families", elemType: ListWordSenses200ApplicationJsonFamilies }),
        __metadata("design:type", Array)
    ], ListWordSenses200ApplicationJson.prototype, "families", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features", elemType: ListWordSenses200ApplicationJsonFeatures }),
        __metadata("design:type", Array)
    ], ListWordSenses200ApplicationJson.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", Number)
    ], ListWordSenses200ApplicationJson.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLemma" }),
        __metadata("design:type", Boolean)
    ], ListWordSenses200ApplicationJson.prototype, "isLemma", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legacyMapId" }),
        __metadata("design:type", Number)
    ], ListWordSenses200ApplicationJson.prototype, "legacyMapId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lemma" }),
        __metadata("design:type", String)
    ], ListWordSenses200ApplicationJson.prototype, "lemma", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lexemeId" }),
        __metadata("design:type", Number)
    ], ListWordSenses200ApplicationJson.prototype, "lexemeId", void 0);
    return ListWordSenses200ApplicationJson;
}(SpeakeasyBase));
export { ListWordSenses200ApplicationJson };
var ListWordSensesRequest = /** @class */ (function (_super) {
    __extends(ListWordSensesRequest, _super);
    function ListWordSensesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWordSensesQueryParams)
    ], ListWordSensesRequest.prototype, "queryParams", void 0);
    return ListWordSensesRequest;
}(SpeakeasyBase));
export { ListWordSensesRequest };
var ListWordSensesResponse = /** @class */ (function (_super) {
    __extends(ListWordSensesResponse, _super);
    function ListWordSensesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWordSensesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListWordSensesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ListWordSenses200ApplicationJson }),
        __metadata("design:type", Array)
    ], ListWordSensesResponse.prototype, "listWordSenses200ApplicationJsonObjects", void 0);
    return ListWordSensesResponse;
}(SpeakeasyBase));
export { ListWordSensesResponse };
