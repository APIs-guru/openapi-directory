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
import { AltLabel } from "./altlabel";
import { Value } from "./value";
var VariableLabel = /** @class */ (function (_super) {
    __extends(VariableLabel, _super);
    function VariableLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=altLabels", elemType: AltLabel }),
        __metadata("design:type", Array)
    ], VariableLabel.prototype, "altLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], VariableLabel.prototype, "text", void 0);
    return VariableLabel;
}(SpeakeasyBase));
export { VariableLabel };
var VariableVariableValuesRange = /** @class */ (function (_super) {
    __extends(VariableVariableValuesRange, _super);
    function VariableVariableValuesRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], VariableVariableValuesRange.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], VariableVariableValuesRange.prototype, "to", void 0);
    return VariableVariableValuesRange;
}(SpeakeasyBase));
export { VariableVariableValuesRange };
var VariableVariableValues = /** @class */ (function (_super) {
    __extends(VariableVariableValues, _super);
    function VariableVariableValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=range" }),
        __metadata("design:type", VariableVariableValuesRange)
    ], VariableVariableValues.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values", elemType: Value }),
        __metadata("design:type", Array)
    ], VariableVariableValues.prototype, "values", void 0);
    return VariableVariableValues;
}(SpeakeasyBase));
export { VariableVariableValues };
var Variable = /** @class */ (function (_super) {
    __extends(Variable, _super);
    function Variable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ident" }),
        __metadata("design:type", String)
    ], Variable.prototype, "ident", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", VariableLabel)
    ], Variable.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResponses" }),
        __metadata("design:type", Number)
    ], Variable.prototype, "maxResponses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Variable.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentType" }),
        __metadata("design:type", Number)
    ], Variable.prototype, "parentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questions", elemType: Variable }),
        __metadata("design:type", Array)
    ], Variable.prototype, "questions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], Variable.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use" }),
        __metadata("design:type", Number)
    ], Variable.prototype, "use", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variableValues" }),
        __metadata("design:type", VariableVariableValues)
    ], Variable.prototype, "variableValues", void 0);
    return Variable;
}(SpeakeasyBase));
export { Variable };
