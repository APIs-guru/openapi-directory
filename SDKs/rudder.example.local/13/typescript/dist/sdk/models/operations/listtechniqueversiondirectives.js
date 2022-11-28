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
var ListTechniqueVersionDirectivesPathParams = /** @class */ (function (_super) {
    __extends(ListTechniqueVersionDirectivesPathParams, _super);
    function ListTechniqueVersionDirectivesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=techniqueName" }),
        __metadata("design:type", String)
    ], ListTechniqueVersionDirectivesPathParams.prototype, "techniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=techniqueVersion" }),
        __metadata("design:type", String)
    ], ListTechniqueVersionDirectivesPathParams.prototype, "techniqueVersion", void 0);
    return ListTechniqueVersionDirectivesPathParams;
}(SpeakeasyBase));
export { ListTechniqueVersionDirectivesPathParams };
export var ListTechniqueVersionDirectives200ApplicationJsonActionEnum;
(function (ListTechniqueVersionDirectives200ApplicationJsonActionEnum) {
    ListTechniqueVersionDirectives200ApplicationJsonActionEnum["ListTechniqueDirectives"] = "listTechniqueDirectives";
})(ListTechniqueVersionDirectives200ApplicationJsonActionEnum || (ListTechniqueVersionDirectives200ApplicationJsonActionEnum = {}));
var ListTechniqueVersionDirectives200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListTechniqueVersionDirectives200ApplicationJsonData, _super);
    function ListTechniqueVersionDirectives200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive }),
        __metadata("design:type", Array)
    ], ListTechniqueVersionDirectives200ApplicationJsonData.prototype, "directives", void 0);
    return ListTechniqueVersionDirectives200ApplicationJsonData;
}(SpeakeasyBase));
export { ListTechniqueVersionDirectives200ApplicationJsonData };
export var ListTechniqueVersionDirectives200ApplicationJsonResultEnum;
(function (ListTechniqueVersionDirectives200ApplicationJsonResultEnum) {
    ListTechniqueVersionDirectives200ApplicationJsonResultEnum["Success"] = "success";
    ListTechniqueVersionDirectives200ApplicationJsonResultEnum["Error"] = "error";
})(ListTechniqueVersionDirectives200ApplicationJsonResultEnum || (ListTechniqueVersionDirectives200ApplicationJsonResultEnum = {}));
var ListTechniqueVersionDirectives200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListTechniqueVersionDirectives200ApplicationJson, _super);
    function ListTechniqueVersionDirectives200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ListTechniqueVersionDirectives200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListTechniqueVersionDirectives200ApplicationJsonData)
    ], ListTechniqueVersionDirectives200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ListTechniqueVersionDirectives200ApplicationJson.prototype, "result", void 0);
    return ListTechniqueVersionDirectives200ApplicationJson;
}(SpeakeasyBase));
export { ListTechniqueVersionDirectives200ApplicationJson };
var ListTechniqueVersionDirectivesRequest = /** @class */ (function (_super) {
    __extends(ListTechniqueVersionDirectivesRequest, _super);
    function ListTechniqueVersionDirectivesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTechniqueVersionDirectivesPathParams)
    ], ListTechniqueVersionDirectivesRequest.prototype, "pathParams", void 0);
    return ListTechniqueVersionDirectivesRequest;
}(SpeakeasyBase));
export { ListTechniqueVersionDirectivesRequest };
var ListTechniqueVersionDirectivesResponse = /** @class */ (function (_super) {
    __extends(ListTechniqueVersionDirectivesResponse, _super);
    function ListTechniqueVersionDirectivesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTechniqueVersionDirectivesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTechniqueVersionDirectivesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTechniqueVersionDirectives200ApplicationJson)
    ], ListTechniqueVersionDirectivesResponse.prototype, "listTechniqueVersionDirectives200ApplicationJsonObject", void 0);
    return ListTechniqueVersionDirectivesResponse;
}(SpeakeasyBase));
export { ListTechniqueVersionDirectivesResponse };
