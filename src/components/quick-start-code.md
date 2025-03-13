```python
    ae = AutoEmulate()
    ae.setup(X, y)
    best_emulator = ae.compare()
```

```python
    ae.summarise_cv()
```

| Model                     | Short | RMSE       | R²       |
|---------------------------|-------|------------|----------|
| GaussianProcess           | gp    | 546.703381 | 0.993752 |
| RadialBasisFunctions      | rbf   | 1037.254646| 0.978469 |
| ConditionalNeuralProcess  | cnp   | 2196.036382| 0.908314 |
| SupportVectorMachines     | svm   | 3299.432460| 0.812614 |
| RandomForest              | rf    | 3855.153473| 0.692546 |
| GradientBoosting          | gb    | 3633.381679| 0.686120 |
| SecondOrderPolynomial     | sop   | 3974.504619| 0.577358 |
| LightGBM                  | lgbm  | 5213.820303| 0.325861 |