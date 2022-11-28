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
var ListInflectedFormsQueryParams = /** @class */ (function (_super) {
    __extends(ListInflectedFormsQueryParams, _super);
    function ListInflectedFormsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=family" }),
        __metadata("design:type", String)
    ], ListInflectedFormsQueryParams.prototype, "family", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], ListInflectedFormsQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lexeme" }),
        __metadata("design:type", String)
    ], ListInflectedFormsQueryParams.prototype, "lexeme", void 0);
    return ListInflectedFormsQueryParams;
}(SpeakeasyBase));
export { ListInflectedFormsQueryParams };
var ListInflectedForms200ApplicationJsonFeatures = /** @class */ (function (_super) {
    __extends(ListInflectedForms200ApplicationJsonFeatures, _super);
    function ListInflectedForms200ApplicationJsonFeatures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], ListInflectedForms200ApplicationJsonFeatures.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ListInflectedForms200ApplicationJsonFeatures.prototype, "value", void 0);
    return ListInflectedForms200ApplicationJsonFeatures;
}(SpeakeasyBase));
export { ListInflectedForms200ApplicationJsonFeatures };
var ListInflectedForms200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListInflectedForms200ApplicationJson, _super);
    function ListInflectedForms200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features", elemType: ListInflectedForms200ApplicationJsonFeatures }),
        __metadata("design:type", Array)
    ], ListInflectedForms200ApplicationJson.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLemma" }),
        __metadata("design:type", Boolean)
    ], ListInflectedForms200ApplicationJson.prototype, "isLemma", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], ListInflectedForms200ApplicationJson.prototype, "text", void 0);
    return ListInflectedForms200ApplicationJson;
}(SpeakeasyBase));
export { ListInflectedForms200ApplicationJson };
var ListInflectedFormsRequest = /** @class */ (function (_super) {
    __extends(ListInflectedFormsRequest, _super);
    function ListInflectedFormsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInflectedFormsQueryParams)
    ], ListInflectedFormsRequest.prototype, "queryParams", void 0);
    return ListInflectedFormsRequest;
}(SpeakeasyBase));
export { ListInflectedFormsRequest };
var ListInflectedFormsResponse = /** @class */ (function (_super) {
    __extends(ListInflectedFormsResponse, _super);
    function ListInflectedFormsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListInflectedFormsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListInflectedFormsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ListInflectedForms200ApplicationJson }),
        __metadata("design:type", Array)
    ], ListInflectedFormsResponse.prototype, "listInflectedForms200ApplicationJsonObjects", void 0);
    return ListInflectedFormsResponse;
}(SpeakeasyBase));
export { ListInflectedFormsResponse };
