import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Modal, Pressable, TextInput} from 'react-native';

export const ExpensesOnCategory = (props) => {
  const [modalExpense, setModalExpense] = useState(false);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
          <Text style={expensesOnCategoryStyles.title}>Expenses</Text>
          <Text style={{marginHorizontal: 4, fontSize: 12}}>({props.selectedCategory})</Text>
        </View>
        <View style={{marginHorizontal: 16}}>
          <Button title={'Add'} onPress={() => setModalExpense(true)} />
        </View>
      </View>
      { !(props.selectedCategory === "Unselected") ?
      <View style={expensesOnCategoryStyles.expenses}>
        {props.expenses && props.expenses.map((expense, id) => {
          return (
            <View key={id.toString()} style={expensesOnCategoryStyles.expense}>
              <View>
                <Text>{expense.title}</Text>
                <Text>{expense.date}</Text>
              </View>
              <View>
                <Text>{expense.amount}$</Text>
              </View>
            </View>
          )
        })}
        <View style={expensesOnCategoryStyles.total}>
          <View>
            <Text style={{fontSize: 20}}>{'Total'}</Text>
          </View>
          <View>
            <Text style={{fontSize: 20}}>
              {props.expenses.length && props.expenses.map((expense) => expense.amount)
              && props.expenses.map((expense) => expense.amount).reduce((sum = 0, item) => sum += item)}$
            </Text>
          </View>
        </View>
      </View>
        :
        <View>
          <Text style={{textAlign: 'center'}}>{"Select Category to see the expenses"}</Text>
        </View>
      }
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalExpense}
        onRequestClose={() => setModalExpense(false)}
      >
        <View style={expensesOnCategoryStyles.centeredView}>
          <View style={expensesOnCategoryStyles.modalView}>
            <Text style={expensesOnCategoryStyles.modalText}>Add Expense</Text>
            <Text style={{alignSelf: 'flex-start'}}>{"Title: "}</Text>
            <TextInput
              autoFocus={true}
              placeholder={"Name your spend..."}
              style={expensesOnCategoryStyles.input}
              onChangeText={setTitle}
              value={title}
            />
            <Text style={{alignSelf: 'flex-start'}}>{"Amount: "}</Text>
            <TextInput
              placeholder={"How much did you spend?"}
              style={expensesOnCategoryStyles.input}
              onChangeText={setAmount}
              value={amount}
            />
            <Pressable
              style={[expensesOnCategoryStyles.button, expensesOnCategoryStyles.buttonClose]}
              onPress={() => setModalExpense(false)}
            >
              <Text style={expensesOnCategoryStyles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
};

const expensesOnCategoryStyles = StyleSheet.create({
  input: {
    height: 32,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
    marginLeft: 16,
  },
  expenses: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  expense: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    marginTop: 22
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    width: '40%',
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "right",
    alignSelf: 'flex-end'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
})