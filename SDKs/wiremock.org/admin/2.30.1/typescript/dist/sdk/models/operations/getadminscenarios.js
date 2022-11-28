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
var GetAdminScenarios200ApplicationJsonScenarios = /** @class */ (function (_super) {
    __extends(GetAdminScenarios200ApplicationJsonScenarios, _super);
    function GetAdminScenarios200ApplicationJsonScenarios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAdminScenarios200ApplicationJsonScenarios.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAdminScenarios200ApplicationJsonScenarios.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=possibleStates" }),
        __metadata("design:type", Array)
    ], GetAdminScenarios200ApplicationJsonScenarios.prototype, "possibleStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GetAdminScenarios200ApplicationJsonScenarios.prototype, "state", void 0);
    return GetAdminScenarios200ApplicationJsonScenarios;
}(SpeakeasyBase));
export { GetAdminScenarios200ApplicationJsonScenarios };
var GetAdminScenarios200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAdminScenarios200ApplicationJson, _super);
    function GetAdminScenarios200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scenarios", elemType: GetAdminScenarios200ApplicationJsonScenarios }),
        __metadata("design:type", Array)
    ], GetAdminScenarios200ApplicationJson.prototype, "scenarios", void 0);
    return GetAdminScenarios200ApplicationJson;
}(SpeakeasyBase));
export { GetAdminScenarios200ApplicationJson };
var GetAdminScenariosResponse = /** @class */ (function (_super) {
    __extends(GetAdminScenariosResponse, _super);
    function GetAdminScenariosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAdminScenariosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAdminScenarios200ApplicationJson)
    ], GetAdminScenariosResponse.prototype, "getAdminScenarios200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAdminScenariosResponse.prototype, "statusCode", void 0);
    return GetAdminScenariosResponse;
}(SpeakeasyBase));
export { GetAdminScenariosResponse };
