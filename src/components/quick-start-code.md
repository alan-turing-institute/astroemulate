```python
    ae = AutoEmulate()
    ae.setup(X, y)
    best_emulator = ae.compare()
```

```python
    ae.summarise_cv()
```

<details>
<summary>
    Example output
</summary>

|      | model                     | short | rmse       | r²       |
|------|---------------------------|-------|------------|----------|
| 0    | GaussianProcess           | gp    | 546.703381 | 0.993752 |
| 1    | RadialBasisFunctions      | rbf   | 1037.254646| 0.978469 |
| 2    | ConditionalNeuralProcess  | cnp   | 2196.036382| 0.908314 |
| 3    | SupportVectorMachines     | svm   | 3299.432460| 0.812614 |
| 4    | RandomForest              | rf    | 3855.153473| 0.692546 |
| 5    | GradientBoosting          | gb    | 3633.381679| 0.686120 |
| 6    | SecondOrderPolynomial     | sop   | 3974.504619| 0.577358 |
| 7    | LightGBM                  | lgbm  | 5213.820303| 0.325861 |

</details>